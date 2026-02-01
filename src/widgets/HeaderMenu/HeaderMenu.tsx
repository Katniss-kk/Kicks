import HeaderMenuSvg from '@/assets/icons/HeaderMenuSvg';
import style from './HeaderMenu.module.css';

export default function HeaderMenu() {
  return (
    <button type="button" className={style.menuButton}>
      <HeaderMenuSvg />
    </button>
  );
}
