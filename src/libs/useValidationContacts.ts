import type { IUserContacts } from '@/types/types';

export default function useValidationContacts(userData: IUserContacts) {
  const { email, firstName, lastName, address, phone } = userData;

  let errors = {
    email: true,
    firstName: true,
    lastName: true,
    address: true,
    phone: true,
    password: true,
    gender: true,
  };

  if (!email || !email.includes('@') || !email.includes('.')) {
    errors.email = false;
  }

  if (!firstName || firstName.trim().length < 2) {
    errors.firstName = false;
  }

  if (!lastName || lastName.trim().length < 2) {
    errors.lastName = false;
  }

  if (!address || address.trim().length < 5) {
    errors.address = false;
  }

  if (!phone || phone.trim().length < 10) {
    errors.phone = false;
  }

  return {
    errors,
    isValid: Object.values(errors).every((error) => error === true),
  };
}
