import useValidationContacts from '@/libs/useValidationContacts';
import type { RootState } from '@/services/store';
import { useSelector } from '@/services/store';
import type { IValidation } from '@/types/types';
import type React from 'react';
import { useState } from 'react';

export default function useConstactsDetails() {
  const userData = useSelector((state: RootState) => state.Profile.user);
  const [email, setEmail] = useState<string>(userData?.email || '');
  const [firstName, setFirstName] = useState<string>(userData?.firstName || '');
  const [lastName, setLastName] = useState<string>(userData?.lastName || '');
  const [address, setAddress] = useState<string>(userData?.address || '');
  const [phone, setPhone] = useState<string>(userData?.phone || '');

  const [validation, setValidation] = useState<IValidation>({
    email: true,
    firstName: true,
    lastName: true,
    address: true,
    phone: true,
  });

  const validationResult = useValidationContacts({ email, firstName, lastName, address, phone });

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleClickReview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validationResult.isValid !== false) {
      setValidation(validationResult.errors);
      alert(`! Заглушка ! - Все поля введены верно. Далее оплата заказа`);
    } else {
      setValidation(validationResult.errors);
    }
  };

  return {
    email,
    firstName,
    lastName,
    address,
    phone,
    validation,
    onChangeAddress,
    onChangeEmail,
    onChangeFirstName,
    onChangeLastName,
    onChangePhone,
    handleClickReview,
  };
}
