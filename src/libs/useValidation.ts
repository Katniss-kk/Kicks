import type { IUserContacts } from '@/types/types';

export default function useValidation(userData: IUserContacts) {
  const { email, firstName, lastName, address, phone } = userData;

  let errors = {
    email: false,
    firstName: false,
    lastName: false,
    address: false,
    phone: false,
  };

  if (email && email.includes('@') && email.includes('.')) {
    errors.email = true;
  }

  if (firstName && firstName.trim().length >= 2) {
    errors.firstName = true;
  }

  if (lastName && lastName.trim().length >= 2) {
    errors.lastName = true;
  }

  if (address && address.trim().length >= 5) {
    errors.address = true;
  }

  if (phone && phone.trim().length >= 10) {
    errors.phone = true;
  }

  return {
    errors,
    isValid: Object.values(errors).every((error) => error === true),
  };
}
