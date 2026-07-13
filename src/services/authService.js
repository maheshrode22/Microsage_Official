import { supabase } from '../lib/supabase';

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  if (error) {
    if (error.message === 'Invalid login credentials') {
      throw new Error(
        'Invalid email or password.'
      );
    }
    throw new Error(error.message || 'Invalid email or password.');
  }

  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message || 'Failed to sign out.');
  }
};

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw new Error(error.message || 'Failed to get session.');
  }

  return data.session;
};
