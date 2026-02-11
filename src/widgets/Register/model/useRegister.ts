import type React from 'react';
import { useState } from 'react';
import useValidationRegister from './useValidationRegister';
import type { IUserData, IValidationRegister } from '@/types/types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from '@/services/store';
import { registerUser } from '@/services/slices/RegisterSlice/RegisterSlice';
import { loadingUserFromStorage } from '@/services/slices/ProfileSlice/ProfileSlice';

export default function useRegister() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [gender, setGender] = useState<string>('Female');
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [repPass, setRepPass] = useState<string>('');
  const [validation, setValidation] = useState<IValidationRegister>({
    email: true,
    firstName: true,
    lastName: true,
    gender: true,
    password: true,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userValidate = {
    firstName,
    lastName,
    gender,
    email,
    pass,
    repPass,
  };

  const validationResult = useValidationRegister(userValidate);

  const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const changeGender = (name: string) => {
    setGender(name);
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const changeRepPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepPass(e.target.value);
  };

  const handleClickButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userData: IUserData = {
      avatar: '',
      firstName,
      lastName,
      gender,
      email,
      pass,
      phone: '',
      address: '',
    };

    if (validationResult.isValid !== false) {
      setValidation(validationResult.errors);

      try {
        await dispatch(registerUser(userData)).unwrap();
        dispatch(loadingUserFromStorage());
        navigate('/');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    } else {
      setValidation(validationResult.errors);
    }
  };

  return {
    firstName,
    lastName,
    gender,
    email,
    pass,
    repPass,
    changeEmail,
    changeFirstName,
    changeGender,
    changeLastName,
    changePass,
    changeRepPass,
    handleClickButton,
    validation,
  };
}
