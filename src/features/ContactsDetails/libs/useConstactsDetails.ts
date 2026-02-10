import useValidation from '@/libs/useValidation';
import type { IValidation } from '@/types/types';
import type React from 'react';
import { useState } from 'react';

export default function useConstactsDetails() {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const [validation, setValidation] = useState<IValidation>({
    email: true,
    firstName: true,
    lastName: true,
    address: true,
    phone: true,
  });

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

  const handleClickReview = () => {
    const validation = useValidation({ email, firstName, lastName, address, phone });
    if (validation.isValid !== false) {
      setValidation(validation.errors);
      alert(`! Заглушка ! - Все поля введены верно. Далее оплата заказа`);
    } else {
      setValidation(validation.errors);
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
