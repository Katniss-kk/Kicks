import { NavLink } from 'react-router-dom';
import style from './Login.module.css';
import ButtonForm from '@/shared/ui/Buttons/ButtonForm';
import InputContacts from '@/shared/ui/InputContacts';
import LoginConstants from '../libs/LoginConstants';
import useLogin from '../model/useLogin';

export default function Login() {
  const { email, password, onChangeEmail, onChangePassword, handleClickLogin } = useLogin();
  return (
    <div className={style.loginContainer}>
      <div className={style.textContainer}>
        <h1 className={style.title}>{LoginConstants.title}</h1>
        <NavLink to={LoginConstants.register.link} className={style.link}>
          {LoginConstants.register.text}
        </NavLink>
      </div>
      <div className={style.inputContainer}>
        <InputContacts
          placeHolder={LoginConstants.email.text}
          type={LoginConstants.email.type}
          value={email}
          onChange={onChangeEmail}
          validation
        />
        <InputContacts
          placeHolder={LoginConstants.password.text}
          type={LoginConstants.password.type}
          value={password}
          onChange={onChangePassword}
          validation
        />
      </div>
      <ButtonForm text={LoginConstants.button} handleClick={handleClickLogin} />
    </div>
  );
}
