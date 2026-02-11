import { clearBasket } from '@/services/slices/BasketSlice/BasketSlice';
import { clearUser } from '@/services/slices/ProfileSlice/ProfileSlice';
import { logout } from '@/services/slices/RegisterSlice/RegisterSlice';
import type { RootState } from '@/services/store';
import { useDispatch, useSelector } from '@/services/store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useProfileButton() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.Profile.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCloseModal = () => {
    setOpenModal(!openModal);
  };

  const handleClickButton = () => {
    if (user !== null) {
      onCloseModal();
    } else {
      navigate('/login');
    }
  };

  const handleClickLogout = () => {
    dispatch(logout());
    dispatch(clearUser());
    dispatch(clearBasket());
    onCloseModal();
  };

  return {
    openModal,
    onCloseModal,
    handleClickButton,
    handleClickLogout,
  };
}
