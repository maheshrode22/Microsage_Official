import { supabase } from '../lib/supabase';

const mapJobFromDb = (row) => ({
  id: row.slug,
  slug: row.slug,
  title: row.title,
  designation: row.designation,
  qualification: row.qualification,
  type: row.type,
  openings: row.openings,
  location: row.location,
  hiringProcess: row.hiring_process,
  probation: row.probation,
  stipend: row.stipend,
  salaryNote: row.salary_note,
  focus: row.focus,
  coreSkills: row.core_skills || [],
  technicalSkills: row.technical_skills || [],
  responsibilities: row.responsibilities || [],
  applyEmail: row.apply_email,
  whatsapp: row.whatsapp,
  isPublished: row.is_published,
  isActive: row.is_active,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

const mapJobToDb = (job) => ({
  slug: job.slug,
  title: job.title,
  designation: job.designation,
  qualification: job.qualification,
  type: job.type || 'Full-Time',
  openings: job.openings || null,
  location: job.location,
  hiring_process: job.hiringProcess,
  probation: job.probation,
  stipend: job.stipend,
  salary_note: job.salaryNote,
  focus: job.focus,
  core_skills: job.coreSkills || [],
  technical_skills: job.technicalSkills || [],
  responsibilities: job.responsibilities || [],
  apply_email: job.applyEmail || 'hr@gatetutor.in',
  whatsapp: job.whatsapp || '+91 7709 000 738',
  is_published: job.isPublished !== false,
  is_active: job.isActive !== false,
  updated_at: new Date().toISOString(),
});

export const fetchPublishedJobs = async () => {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message || 'Failed to load jobs.');
  }

  return (data || []).map(mapJobFromDb);
};

export const fetchJobBySlug = async (slug) => {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .maybeSingle();

  if (error) {
    throw new Error(error.message || 'Failed to load job.');
  }

  return data ? mapJobFromDb(data) : null;
};

export const fetchAllJobs = async () => {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message || 'Failed to load jobs.');
  }

  return (data || []).map(mapJobFromDb);
};

export const createJob = async (job) => {
  const { data, error } = await supabase
    .from('job_postings')
    .insert(mapJobToDb(job))
    .select()
    .single();

  if (error) {
    throw new Error(error.message || 'Failed to create job.');
  }

  return mapJobFromDb(data);
};

export const updateJob = async (slug, job) => {
  const { data, error } = await supabase
    .from('job_postings')
    .update(mapJobToDb({ ...job, slug: job.slug || slug }))
    .eq('slug', slug)
    .select()
    .single();

  if (error) {
    throw new Error(error.message || 'Failed to update job.');
  }

  return mapJobFromDb(data);
};

export const deleteJob = async (slug) => {
  const { error } = await supabase
    .from('job_postings')
    .delete()
    .eq('slug', slug);

  if (error) {
    throw new Error(error.message || 'Failed to delete job.');
  }
};

export const toggleJobPublished = async (slug, published) => {
  const { data, error } = await supabase
    .from('job_postings')
    .update({ is_published: published, updated_at: new Date().toISOString() })
    .eq('slug', slug)
    .select()
    .single();

  if (error) {
    throw new Error(error.message || 'Failed to update publish status.');
  }

  return mapJobFromDb(data);
};

export const slugifyTitle = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const linesToArray = (text) =>
  text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

export const arrayToLines = (arr) => (arr || []).join('\n');
