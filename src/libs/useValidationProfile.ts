import type { IUserData } from '@/types/types';

export default function useValidationProfile(userData: IUserData) {
  const { email, firstName, lastName, address, phone, pass, gender } = userData;

  let errors = {
    email: false,
    firstName: false,
    lastName: false,
    address: false,
    phone: false,
    password: false,
    gender: false,
  };

  if (!email || !email.includes('@') || !email.includes('.')) {
    errors.email = true;
  }

  if (!firstName || firstName.trim().length < 2) {
    errors.firstName = true;
  }

  if (!lastName || lastName.trim().length < 2) {
    errors.lastName = true;
  }

  if (!address || address.trim().length < 5) {
    errors.address = true;
  }

  if (!phone || phone.trim().length < 10) {
    errors.phone = true;
  }

  if (!pass || pass.trim().length < 8) {
    errors.password = true;
  }

  if (!gender || gender === '') {
    errors.gender = true;
  }

  return {
    errors,
    isValid: Object.values(errors).every((error) => error === false),
  };
}
