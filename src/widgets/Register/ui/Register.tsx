import InputContacts from '@/shared/ui/InputContacts';
import style from './Register.module.css';
import ButtonForm from '@/shared/ui/Buttons/ButtonForm';
import useRegister from '../model/useRegister';
import RegisterConstants from '../libs/RegisterConstants';
import clsx from 'clsx';
import ButtonFilterCheckBox from '@/shared/ui/Buttons/ButtonFilterCheckBox';

export default function Register() {
  const {
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
  } = useRegister();
  return (
    <div className={style.registerContainer}>
      <h1 className={clsx(style.text, style.title)}>{RegisterConstants.title}</h1>
      <div className={style.containerLabel}>
        <h2 className={clsx(style.text, style.title)}>{RegisterConstants.names.title}</h2>
        <InputContacts
          placeHolder={RegisterConstants.names.inputFirstName.title}
          type={RegisterConstants.names.inputFirstName.type}
          value={firstName}
          onChange={changeFirstName}
          validation={validation.firstName}
        />
        <InputContacts
          placeHolder={RegisterConstants.names.inputLastName.title}
          type={RegisterConstants.names.inputLastName.type}
          value={lastName}
          onChange={changeLastName}
          validation={validation.lastName}
        />
      </div>
      <div className={style.containerLabel}>
        <h2 className={clsx(style.text, style.title)}>{RegisterConstants.gender.title}</h2>
        <div className={style.containerCheckBox}>
          {RegisterConstants.gender.value.map((genderValue) => {
            const activeCheckBox = gender === genderValue;
            return (
              <ButtonFilterCheckBox
                key={genderValue}
                name={genderValue}
                handleClick={changeGender}
                active={activeCheckBox}
              />
            );
          })}
        </div>
      </div>
      <div className={style.containerLabel}>
        <h2 className={clsx(style.text, style.title)}>{RegisterConstants.login.title}</h2>
        <InputContacts
          placeHolder={RegisterConstants.login.email.title}
          type={RegisterConstants.login.email.type}
          value={email}
          onChange={changeEmail}
          validation={validation.email}
        />
        <InputContacts
          placeHolder={RegisterConstants.login.password.title}
          type={RegisterConstants.login.password.type}
          value={pass}
          onChange={changePass}
          validation={validation.password || false}
        />
        <div>
          <InputContacts
            placeHolder={RegisterConstants.login.repeatPassword.title}
            type={RegisterConstants.login.repeatPassword.type}
            value={repPass}
            onChange={changeRepPass}
            validation={validation.password || false}
          />
          <span className={style.span}>{RegisterConstants.login.span}</span>
        </div>
      </div>
      <ButtonForm text={RegisterConstants.button} handleClick={handleClickButton} />
    </div>
  );
}
