import type React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const user = { email: email, password: password };
    alert(`Данные введены. Мок вход в аккаунт идет через регистрацию`);
    navigate('/');
  };

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    handleClickLogin,
  };
}
