import { login } from '@/services/slices/ProfileSlice/ProfileSlice';
import { useDispatch } from '@/services/store';
import type { IUserData } from '@/types/types';
import type React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user: IUserData = {
      email: email,
      pass: password,
      avatar: '',
      firstName: '',
      lastName: '',
      gender: '',
      address: '',
      phone: '',
    };
    dispatch(login(user));
    navigate('/profile');
  };

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    handleClickLogin,
  };
}
