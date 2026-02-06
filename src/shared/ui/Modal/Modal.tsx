import type { IModal } from './libs/types';
import style from './Modal.module.css';

export default function Modal({ children, isOpen }: IModal) {
  if (isOpen) {
    return <div className={style.modal}>{children}</div>;
  }
  return null;
}
