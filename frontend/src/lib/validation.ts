// Common validation utilities for forms

// List of free email providers (non-business emails)
const FREE_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'aol.com',
  'icloud.com',
  'mail.com',
  'protonmail.com',
//   'zoho.com',
  'yandex.com',
  'gmx.com',
  'inbox.com',
  'mail.ru',
  'qq.com',
  '163.com',
  'msn.com',
  'me.com',
  'mac.com',
  'fastmail.com',
  'hushmail.com',
  'tutanota.com',
  'hey.com',
];

/**
 * Validates if an email is a business email (not from free providers)
 */
export function isBusinessEmail(email: string): boolean {
  const domain = email.toLowerCase().split('@')[1];
  return !FREE_EMAIL_DOMAINS.includes(domain);
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format
 * Accepts formats like:
 * - 1234567890
 * - 123-456-7890
 * - (123) 456-7890
 * - +1 123-456-7890
 * - +1 (123) 456-7890
 */
export function isValidPhoneNumber(phone: string): boolean {
  // Remove all non-digit characters to count digits
  const digitsOnly = phone.replace(/\D/g, '');
  
  // Must have at least 10 digits (US/Canada format)
  // Can have up to 15 digits (international format)
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return false;
  }
  
  // Basic phone number pattern validation
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone);
}

/**
 * Format phone number for storage (digits only with optional + prefix)
 */
export function normalizePhoneNumber(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '');
  // Keep + if it was at the start
  return phone.trim().startsWith('+') ? `+${digitsOnly}` : digitsOnly;
}

/**
 * Validate name (first name or last name)
 */
export function isValidName(name: string): boolean {
  const trimmed = name.trim();
  return trimmed.length >= 2 && trimmed.length <= 50 && /^[a-zA-Z\s'-]+$/.test(trimmed);
}

/**
 * Validate company name
 */
export function isValidCompany(company: string): boolean {
  const trimmed = company.trim();
  return trimmed.length >= 2 && trimmed.length <= 100;
}
