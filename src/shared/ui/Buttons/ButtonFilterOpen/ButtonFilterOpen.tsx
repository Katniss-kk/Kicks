import style from './ButtonFilterOpen.module.css';
import { IButtonFilterOpen } from './libs/types';

export default function ButtonFilterOpen({ name, svg, handleClick }: IButtonFilterOpen) {
  return (
    <button className={style.button} onClick={() => handleClick(name)}>
      {name}
      {svg}
    </button>
  );
}
