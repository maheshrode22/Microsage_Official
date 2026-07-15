-- ============================================================
-- Create / reset admin user for login
-- Run in: Supabase Dashboard → SQL Editor
--
-- Login after running:
--   Email:    computer@gatetutor.in
--   Password: TB@123
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.admin_users (
  id            UUID PRIMARY KEY,
  email         TEXT UNIQUE NOT NULL,
  is_active     BOOLEAN NOT NULL DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "auth_select_admin_users" ON public.admin_users;
CREATE POLICY "auth_select_admin_users"
  ON public.admin_users
  FOR SELECT
  TO authenticated
  USING (true);

DO $$
DECLARE
  admin_email text := 'computer@gatetutor.in';
  admin_password text := 'TB@123';
  admin_user_id uuid;
  instance uuid;
BEGIN
  SELECT id INTO instance FROM auth.instances LIMIT 1;
  IF instance IS NULL THEN
    instance := '00000000-0000-0000-0000-000000000000';
  END IF;

  SELECT id INTO admin_user_id
  FROM auth.users
  WHERE email = admin_email
  LIMIT 1;

  IF admin_user_id IS NULL THEN
    admin_user_id := gen_random_uuid();

    INSERT INTO auth.users (
      instance_id,
      id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      raw_app_meta_data,
      raw_user_meta_data,
      created_at,
      updated_at,
      confirmation_token,
      email_change,
      email_change_token_new,
      recovery_token,
      is_sso_user,
      is_anonymous
    ) VALUES (
      instance,
      admin_user_id,
      'authenticated',
      'authenticated',
      admin_email,
      crypt(admin_password, gen_salt('bf')),
      NOW(),
      '{"provider":"email","providers":["email"]}',
      jsonb_build_object('email', admin_email),
      NOW(),
      NOW(),
      '',
      '',
      '',
      '',
      false,
      false
    );

    RAISE NOTICE 'Admin user created: %', admin_email;
  ELSE
    UPDATE auth.users
    SET
      encrypted_password = crypt(admin_password, gen_salt('bf')),
      email_confirmed_at = COALESCE(email_confirmed_at, NOW()),
      updated_at = NOW()
    WHERE id = admin_user_id;

    RAISE NOTICE 'Admin user already existed. Password reset to: %', admin_password;
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM auth.identities
    WHERE user_id = admin_user_id
      AND provider = 'email'
  ) THEN
    INSERT INTO auth.identities (
      user_id,
      identity_data,
      provider,
      provider_id,
      last_sign_in_at,
      created_at,
      updated_at
    ) VALUES (
      admin_user_id,
      jsonb_build_object(
        'sub', admin_user_id::text,
        'email', admin_email,
        'email_verified', true,
        'phone_verified', false
      ),
      'email',
      admin_user_id::text,
      NOW(),
      NOW(),
      NOW()
    );

    RAISE NOTICE 'Admin identity created for email login.';
  ELSE
    UPDATE auth.identities
    SET
      identity_data = jsonb_build_object(
        'sub', admin_user_id::text,
        'email', admin_email,
        'email_verified', true,
        'phone_verified', false
      ),
      provider_id = admin_user_id::text,
      updated_at = NOW()
    WHERE user_id = admin_user_id
      AND provider = 'email';

    RAISE NOTICE 'Admin identity updated for email login.';
  END IF;

  INSERT INTO public.admin_users (id, email, is_active)
  VALUES (admin_user_id, admin_email, true)
  ON CONFLICT (email) DO UPDATE
  SET id = EXCLUDED.id, is_active = true;
END $$;

-- Verify
SELECT id, email, email_confirmed_at IS NOT NULL AS confirmed
FROM auth.users
WHERE email = 'computer@gatetutor.in';

SELECT id, email, is_active
FROM public.admin_users
WHERE email = 'computer@gatetutor.in';
