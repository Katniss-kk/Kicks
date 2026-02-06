import clsx from 'clsx';
import style from './ButtonDefault.module.css';
import type { IButtonDefault } from './libs/types';

export default function ButtonDefault({ handleClick, css, children }: IButtonDefault) {
  return (
    <button onClick={() => handleClick()} className={clsx(style.button, css)}>
      {children}
    </button>
  );
}
