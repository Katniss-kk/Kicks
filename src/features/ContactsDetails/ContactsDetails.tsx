import clsx from 'clsx';
import style from './ContactsDetails.module.css';
import InputContacts from '@/shared/ui/InputContacts';
import ContactsDetailsConstants from './libs/ContactsDetailsConstants';
import ContactsDetailsButton from './libs/ContactsDetailsButton';

import LongArrow from '@/assets/icons/LongArrow';
import useConstactsDetails from './libs/useConstactsDetails';

export default function ContactsDetails() {
  const {
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
  } = useConstactsDetails();
  return (
    <div className={style.contacts}>
      <div className={style.containerBlock}>
        <div className={style.container}>
          <h2 className={clsx(style.text, style.title)}>{ContactsDetailsConstants.Title.title}</h2>
          <p className={clsx(style.text, style.paragraph)}>
            {ContactsDetailsConstants.Title.paragraph}
          </p>
        </div>
        <InputContacts
          value={email}
          placeHolder={ContactsDetailsConstants.email.placeHolder}
          onChange={onChangeEmail}
          type={ContactsDetailsConstants.email.type}
          validation={validation.email}
        />
      </div>
      <div className={style.containerBlock}>
        <h2 className={clsx(style.text, style.title)}>{ContactsDetailsConstants.block.title}</h2>
        <InputContacts
          value={firstName}
          placeHolder={ContactsDetailsConstants.FirstName.placeHolder}
          onChange={onChangeFirstName}
          type={ContactsDetailsConstants.FirstName.type}
          validation={validation.firstName}
        />
        <InputContacts
          value={lastName}
          placeHolder={ContactsDetailsConstants.LastName.placeHolder}
          onChange={onChangeLastName}
          type={ContactsDetailsConstants.LastName.type}
          validation={validation.lastName}
        />
        <InputContacts
          value={address}
          placeHolder={ContactsDetailsConstants.Address.placeHolder}
          onChange={onChangeAddress}
          type={ContactsDetailsConstants.Address.type}
          validation={validation.address}
        />
        <InputContacts
          value={phone}
          placeHolder={ContactsDetailsConstants.Phone.placeHolder}
          onChange={onChangePhone}
          type={ContactsDetailsConstants.Phone.type}
          validation={validation.phone}
        />
      </div>
      <button className={style.button} onClick={() => handleClickReview()}>
        {ContactsDetailsButton} <LongArrow />
      </button>
    </div>
  );
}
