import type React from 'react';
import { useState } from 'react';
import ProfileConstants from '../libs/ProfileConstants';
import type { RootState} from '@/services/store';
import { useDispatch, useSelector } from '@/services/store';
import { userEdit } from '@/services/slices/ProfileSlice/ProfileSlice';
import type { IUserData } from '@/types/types';
import { useNavigate } from 'react-router-dom';
import useValidationProfile from '@/libs/useValidationProfile';

export default function useProfile() {
  const userData = useSelector((state: RootState) => state.Profile.user);

  const [avatar, setAvatar] = useState<string>(
    userData?.avatar || ProfileConstants.avatar.defaultAvatar
  );
  const [firstName, setFirstName] = useState<string>(userData?.firstName || '');
  const [lastName, setLastName] = useState<string>(userData?.lastName || '');
  const [email, setEmail] = useState<string>(userData?.email || '');
  const [address, setAddress] = useState<string>(userData?.address || '');
  const [gender, setGender] = useState<string>(userData?.gender || '');
  const [phone, setPhone] = useState<string>(userData?.phone || '');
  const [pass, setPass] = useState<string>(userData?.pass || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDataForValidation: IUserData = {
    avatar,
    firstName,
    lastName,
    email,
    address,
    gender,
    phone,
    pass,
  };

  const validation = useValidationProfile(userDataForValidation);

  const onChangeAvatar = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setAvatar(reader.result as string);
        };

        reader.readAsDataURL(file);
      }
    };

    input.click();
  };

  const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const onChangeGender = (value: string) => {
    setGender(value);
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  const handleClickButton = () => {
    const userDataToSave: IUserData = {
      avatar,
      firstName,
      lastName,
      email,
      address,
      gender,
      phone,
      pass,
    };

    if (!validation.isValid) {
      return;
    }

    dispatch(userEdit(userDataToSave));
    navigate('/');
    window.scrollTo(0, 0);
  };

  return {
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
  };
}
