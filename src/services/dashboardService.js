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

export const fetchJobApplications = async () => {
  const { data, error } = await supabase
    .from('job_applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message || 'Failed to load job applications.');
  }

  return data;
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
    .in('id', ids);

  if (error) {
    throw new Error(error.message || 'Failed to mark applications as read.');
  }
};
