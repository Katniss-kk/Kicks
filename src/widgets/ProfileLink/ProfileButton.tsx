import Profile from '@assets/icons/Profile';
import style from './ProfileButton.module.css';
import useProfileButton from './model/useProfileButton';
import Modal from '@/shared/ui/Modal';
import { useClickOutside } from '@/libs/useClickOutside';
import { NavLink } from 'react-router-dom';

export default function ProfileButton() {
  const { handleClickButton, openModal, onCloseModal, handleClickLogout } = useProfileButton();
  return (
    <>
      <button className={style.button} onClick={() => handleClickButton()}>
        <Profile />
      </button>
      <Modal isOpen={openModal} css={style.modal}>
        <ModalContent onCloseModal={onCloseModal} handleClickLogout={handleClickLogout} />
      </Modal>
    </>
  );
}

const ModalContent = ({
  onCloseModal,
  handleClickLogout,
}: {
  onCloseModal: () => void;
  handleClickLogout: () => void;
}) => {
  const modalRef = useClickOutside(onCloseModal, true);

  return (
    <div ref={modalRef} className={style.containerLinks}>
      <NavLink to={'/profile'} className={style.buttonMenu}>
        Profile
      </NavLink>
      <button className={style.buttonMenu} onClick={() => handleClickLogout()}>
        Logout
      </button>
    </div>
  );
};
