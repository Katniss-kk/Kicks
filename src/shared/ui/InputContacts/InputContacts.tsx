import clsx from 'clsx';
import style from './InputContacts.module.css';
import type { IInputContacts } from './libs/types';

export default function InputContacts({
  placeHolder,
  onChange,
  type,
  value,
  validation,
}: IInputContacts) {
  return (
    <input
      type={type}
      onChange={(e) => onChange(e)}
      value={value}
      placeholder={placeHolder}
      className={clsx(style.input, validation ? '' : style.validation)}
    />
  );
}
