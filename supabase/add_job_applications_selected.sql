-- Add is_selected column to public.job_applications
-- Run in: Supabase Dashboard → SQL Editor

ALTER TABLE public.job_applications
  ADD COLUMN IF NOT EXISTS is_selected BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS job_applications_is_selected_idx
  ON public.job_applications (is_selected)
  WHERE deleted_at IS NULL;
