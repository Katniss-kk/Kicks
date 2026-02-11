import React from 'react';
import style from './ButtonForm.module.css';
import type { IButtonForm } from './libs/types';
import LongArrow from '@/assets/icons/LongArrow';

export default function ButtonForm({ text, handleClick }: IButtonForm) {
  return (
    <button
      className={style.button}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
    >
      {text} <LongArrow />
    </button>
  );
}
