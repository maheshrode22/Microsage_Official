-- Add notes column to public.job_applications
-- Run in: Supabase Dashboard → SQL Editor

ALTER TABLE public.job_applications
  ADD COLUMN IF NOT EXISTS notes TEXT DEFAULT '';
