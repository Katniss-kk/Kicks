import { NavLink } from 'react-router-dom';
import style from './LogoLink.module.css';
import LogoSvg from '@assets/LogoSvg/LogoSvg';

export default function LogoLink() {
  return (
    <NavLink to={'/'} className={style.logo}>
      <LogoSvg />
    </NavLink>
  );
}
