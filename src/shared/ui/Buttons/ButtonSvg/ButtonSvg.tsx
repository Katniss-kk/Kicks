import { IButtonSvg } from './libs/types';

export default function ButtonSvg({ css, children, handleClick }: IButtonSvg) {
  return (
    <button className={css} onClick={() => handleClick()}>
      {children}
    </button>
  );
}
