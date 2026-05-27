/**
 * Basic form field validators
 */

export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));
};

export const isNotEmpty = (value) => {
  return value.trim().length > 0;
};

/**
 * Validates the contact form fields.
 * @param {{ name: string, email: string, phone: string, message: string }} fields
 * @returns {{ isValid: boolean, errors: object }}
 */
export const validateContactForm = ({ name, email, phone, message }) => {
  const errors = {};

  if (!isNotEmpty(name)) errors.name = 'Full name is required.';
  if (!isNotEmpty(email)) errors.email = 'Email address is required.';
  else if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.';
  if (phone && !isValidPhone(phone)) errors.phone = 'Please enter a valid 10-digit Indian phone number.';
  if (!isNotEmpty(message)) errors.message = 'Message is required.';

  return { isValid: Object.keys(errors).length === 0, errors };
};
