import clsx from 'clsx';
import style from './ButtonPagination.module.css';
import { IButtonPagination } from './libs/types';

export default function ButtonPagination({ children, css, active }: IButtonPagination) {
  if (active) {
    return <button className={clsx(style.button, style.buttonActive, css)}>{children}</button>;
  }
  return <button className={clsx(style.button, css)}>{children}</button>;
}
