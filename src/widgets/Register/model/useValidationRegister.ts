import type { IValidationRegisterProops } from '@/types/types';

export default function useValidationRegister(userData: IValidationRegisterProops) {
  const { firstName, lastName, gender, email, pass, repPass } = userData;

  let errors = {
    email: false,
    firstName: false,
    lastName: false,
    gender: false,
    password: false,
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
  if (gender && gender !== '') {
    errors.gender = true;
  }
  if (pass && pass.length > 7 && pass === repPass) {
    errors.password = true;
  }
  return {
    errors,
    isValid: Object.values(errors).every((error) => error === true),
  };
}
