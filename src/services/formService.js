import { supabase } from '../lib/supabase';

const RESUMES_BUCKET = 'resumes';

export const submitContactForm = async ({ name, email, phone, message }) => {
  const { error } = await supabase.from('contact_submissions').insert({
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() || null,
    message: message.trim(),
  });

  if (error) {
    throw new Error(error.message || 'Failed to send message. Please try again.');
  }
};

export const submitJobApplication = async ({
  jobId,
  jobTitle,
  name,
  email,
  phone,
  resumeFile,
}) => {
  const { data: jobRow, error: jobError } = await supabase
    .from('job_postings')
    .select('slug, is_published, is_active')
    .eq('slug', jobId)
    .maybeSingle();

  if (jobError) {
    throw new Error(jobError.message || 'Failed to verify job posting.');
  }

  if (!jobRow || !jobRow.is_published || !jobRow.is_active) {
    throw new Error('Applications are closed for this position.');
  }

  const safeName = resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const resumePath = `${jobId}/${Date.now()}_${safeName}`;

  const { error: uploadError } = await supabase.storage
    .from(RESUMES_BUCKET)
    .upload(resumePath, resumeFile, {
      cacheControl: '3600',
      upsert: false,
    });

  if (uploadError) {
    throw new Error(uploadError.message || 'Failed to upload resume. Please try again.');
  }

  const { error: insertError } = await supabase.from('job_applications').insert({
    job_id: jobId,
    job_title: jobTitle,
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    resume_path: resumePath,
    resume_name: resumeFile.name,
  });

  if (insertError) {
    await supabase.storage.from(RESUMES_BUCKET).remove([resumePath]);
    throw new Error(insertError.message || 'Failed to submit application. Please try again.');
  }
};
