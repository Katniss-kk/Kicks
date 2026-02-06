import CheckBox from '@/assets/icons/CheckBox';
import style from './ButtonFilterCheckBox.module.css';
import type { IButtonFilterCheckBox } from './libs/types';

export default function ButtonFilterCheckBox({ name, handleClick, active }: IButtonFilterCheckBox) {
  return (
    <button onClick={() => handleClick(name)} className={style.button}>
      <CheckBox style={active ? style.fill : 'transparent'} />
      {name}
    </button>
  );
}
