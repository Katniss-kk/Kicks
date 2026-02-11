import HeaderMenuSvg from '@/assets/icons/HeaderMenuSvg';
import style from './HeaderMenu.module.css';
import Modal from '@/shared/ui/Modal';
import { NavLink } from 'react-router-dom';
import Links from './libs/HeaderMenuConstants';
import useHeaderMenu from './model/useHeaderMenu';
import { useClickOutside } from '@/libs/useClickOutside';

export default function HeaderMenu() {
  const { onCloseModal, modal } = useHeaderMenu();
  return (
    <div className={style.headerMenuContainer}>
      <button type="button" className={style.menuButton} onClick={() => onCloseModal()}>
        <HeaderMenuSvg />
      </button>
      <Modal isOpen={modal}>
        <ModalContent onCloseModal={onCloseModal} />
      </Modal>
    </div>
  );
}

const ModalContent = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const modalRef = useClickOutside(onCloseModal, true);

  return (
    <div ref={modalRef} className={style.containerLinks}>
      {Links.map((link) => (
        <NavLink
          to={link.link}
          className={style.link}
          key={link.link}
          onClick={() => onCloseModal()}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};
