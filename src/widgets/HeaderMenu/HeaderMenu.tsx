import HeaderMenuSvg from '@/assets/icons/HeaderMenuSvg';
import style from './HeaderMenu.module.css';
import { useState } from 'react';
import Modal from '@/shared/ui/Modal';
import { NavLink } from 'react-router-dom';
import Links from './libs/HeaderMenuConstants';

export default function HeaderMenu() {
  const [modal, setModal] = useState<boolean>(false);
  const onCloseModal = () => {
    setModal(!modal);
  };
  return (
    <div className={style.headerMenuContainer}>
      <button type="button" className={style.menuButton} onClick={() => onCloseModal()}>
        <HeaderMenuSvg />
      </button>
      <Modal isOpen={modal} onClose={onCloseModal}>
        <ModalContent />
      </Modal>
    </div>
  );
}

const ModalContent = () => {
  return (
    <div className={style.containerLinks}>
      {Links.map((link) => (
        <NavLink to={link.link} className={style.link} key={link.link}>
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};
