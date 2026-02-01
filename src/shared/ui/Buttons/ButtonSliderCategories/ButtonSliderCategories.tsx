import clsx from 'clsx';
import style from './ButtonSliderCategories.module.css';
import { IButtonSliderCategories } from './libs/types';
import Arrow from '@assets/icons/Arrow';

export default function ButtonSliderCategories({ handleClick, css, fill }: IButtonSliderCategories) {
  return (
    <button onClick={() => handleClick()} className={clsx(style.button, css)}>
      <Arrow fill={fill}/>
    </button>
  );
}
