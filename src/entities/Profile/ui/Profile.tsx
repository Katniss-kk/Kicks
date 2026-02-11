import InputContacts from '@/shared/ui/InputContacts';
import style from './Profile.module.css';
import ProfileConstants from '../libs/ProfileConstants';
import ButtonFilterCheckBox from '@/shared/ui/Buttons/ButtonFilterCheckBox';
import useProfile from '../model/useProfile';
import ButtonForm from '@/shared/ui/Buttons/ButtonForm';

export default function Profile() {
  const {
    avatar,
    firstName,
    lastName,
    email,
    address,
    gender,
    phone,
    pass,
    onChangeAvatar,
    onChangeAddress,
    onChangeEmail,
    onChangeFirstName,
    onChangeGender,
    onChangeLastName,
    onChangePassword,
    onChangePhone,
    handleClickButton,
    validation,
  } = useProfile();
  return (
    <div className={style.profileContainer}>
      <img
        src={avatar}
        alt={ProfileConstants.avatar.alt}
        className={style.avatar}
        onClick={() => onChangeAvatar()}
      />
      <div className={style.containerBlock}>
        <h2 className={style.title}>{ProfileConstants.titles[0]}</h2>
        <InputContacts
          placeHolder={ProfileConstants.firstName}
          value={firstName}
          onChange={onChangeFirstName}
          type="text"
          validation
        />
        {validation.errors.firstName ? (
          <span className={style.validation}>{ProfileConstants.validation.firstName}</span>
        ) : (
          ''
        )}
        <InputContacts
          placeHolder={ProfileConstants.lastName}
          value={lastName}
          onChange={onChangeLastName}
          type="text"
          validation
        />
        {validation.errors.lastName ? (
          <span className={style.validation}>{ProfileConstants.validation.lastName}</span>
        ) : (
          ''
        )}
      </div>
      <div className={style.containerBlock}>
        <h2 className={style.title}>{ProfileConstants.titles[1]}</h2>
        <InputContacts
          placeHolder={ProfileConstants.email}
          value={email}
          onChange={onChangeEmail}
          type="text"
          validation
        />
        {validation.errors.email ? (
          <span className={style.validation}>{ProfileConstants.validation.email}</span>
        ) : (
          ''
        )}
        <InputContacts
          placeHolder={ProfileConstants.address}
          value={address}
          onChange={onChangeAddress}
          type="text"
          validation
        />
        {validation.errors.address ? (
          <span className={style.validation}>{ProfileConstants.validation.address}</span>
        ) : (
          ''
        )}
        <h3 className={style.title}>{ProfileConstants.titles[1]}</h3>
        <div className={style.containerGender}>
          {ProfileConstants.gender.value.map((gen) => (
            <ButtonFilterCheckBox
              key={gen}
              name={gen}
              handleClick={onChangeGender}
              active={gender === gen}
            />
          ))}
        </div>
        {validation.errors.gender ? (
          <span className={style.validation}>{ProfileConstants.validation.gender}</span>
        ) : (
          ''
        )}
      </div>
      <div className={style.containerBlock}>
        <h2 className={style.title}>{ProfileConstants.titles[3]}</h2>
        <InputContacts
          placeHolder={ProfileConstants.phone}
          value={phone}
          onChange={onChangePhone}
          type="text"
          validation
        />
        {validation.errors.phone ? (
          <span className={style.validation}>{ProfileConstants.validation.phone}</span>
        ) : (
          ''
        )}
        <InputContacts
          placeHolder={ProfileConstants.password}
          value={pass}
          onChange={onChangePassword}
          type="password"
          validation
        />
        {validation.errors.password ? (
          <span className={style.validation}>{ProfileConstants.validation.pass}</span>
        ) : (
          ''
        )}
      </div>
      <ButtonForm text={ProfileConstants.buttonSave} handleClick={handleClickButton} />
    </div>
  );
}
