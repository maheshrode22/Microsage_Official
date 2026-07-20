import { supabase } from '../lib/supabase';

const RESUMES_BUCKET = 'resumes';

export const fetchContactSubmissions = async () => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message || 'Failed to load contact submissions.');
  }

  return data;
};

export const fetchJobApplications = async ({ includeDeleted = false } = {}) => {
  let query = supabase
    .from('job_applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (!includeDeleted) {
    query = query.is('deleted_at', null);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message || 'Failed to load job applications.');
  }

  return data;
};

export const softDeleteJobApplication = async (id) => {
  const { error } = await supabase
    .from('job_applications')
    .update({ deleted_at: new Date().toISOString() })
    .eq('id', id)
    .is('deleted_at', null);

  if (error) {
    throw new Error(error.message || 'Failed to delete application.');
  }
};

export const restoreJobApplication = async (id) => {
  const { error } = await supabase
    .from('job_applications')
    .update({ deleted_at: null })
    .eq('id', id);

  if (error) {
    throw new Error(error.message || 'Failed to restore application.');
  }
};

export const toggleJobApplicationMarked = async (id, isMarked) => {
  const { error } = await supabase
    .from('job_applications')
    .update({ is_marked: isMarked })
    .eq('id', id);

  if (error) {
    throw new Error(error.message || 'Failed to update marked status.');
  }
};

export const getResumeDownloadUrl = async (resumePath) => {
  const { data, error } = await supabase.storage
    .from(RESUMES_BUCKET)
    .createSignedUrl(resumePath, 3600);

  if (error) {
    throw new Error(error.message || 'Failed to generate resume download link.');
  }

  return data.signedUrl;
};

export const markJobApplicationsAsRead = async (ids) => {
  if (!ids.length) return;

  const { error } = await supabase
    .from('job_applications')
    .update({ is_read: true })
    .in('id', ids)
    .is('deleted_at', null);

  if (error) {
    throw new Error(error.message || 'Failed to mark applications as read.');
  }
};
