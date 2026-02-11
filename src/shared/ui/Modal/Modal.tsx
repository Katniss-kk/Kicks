import type { IModal } from './libs/types';
import style from './Modal.module.css';

export default function Modal({ children, isOpen, css }: IModal) {
  if (isOpen) {
    return <div className={css || style.modal}>{children}</div>;
  }
  return null;
}
