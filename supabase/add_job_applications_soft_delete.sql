-- Prevent duplicate applications for the same job + email
-- Run in: Supabase Dashboard → SQL Editor

-- Soft delete / mark columns (safe if already applied)
ALTER TABLE public.job_applications
  ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ DEFAULT NULL;

ALTER TABLE public.job_applications
  ADD COLUMN IF NOT EXISTS is_marked BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS job_applications_deleted_at_idx
  ON public.job_applications (deleted_at);

CREATE INDEX IF NOT EXISTS job_applications_is_marked_idx
  ON public.job_applications (is_marked)
  WHERE deleted_at IS NULL;

-- Keep the oldest active application when duplicates already exist
DELETE FROM public.job_applications a
USING public.job_applications b
WHERE a.ctid > b.ctid
  AND a.job_id = b.job_id
  AND lower(a.email) = lower(b.email)
  AND a.deleted_at IS NULL
  AND b.deleted_at IS NULL;

-- One active application per job + email
CREATE UNIQUE INDEX IF NOT EXISTS job_applications_job_email_unique
  ON public.job_applications (job_id, lower(email))
  WHERE deleted_at IS NULL;

-- Safe check used by the public apply form (returns only true/false)
CREATE OR REPLACE FUNCTION public.has_job_application(p_job_id text, p_email text)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.job_applications
    WHERE job_id = p_job_id
      AND lower(email) = lower(btrim(p_email))
      AND deleted_at IS NULL
  );
$$;

REVOKE ALL ON FUNCTION public.has_job_application(text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_job_application(text, text) TO anon, authenticated;
