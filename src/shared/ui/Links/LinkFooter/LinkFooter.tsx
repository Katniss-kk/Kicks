import { NavLink } from 'react-router-dom';
import style from './LinkFooter.module.css';
import { ILinkFooter } from './libs/types';

export default function LinkFooter({ title, link }: ILinkFooter) {
  return (
    <NavLink to={link} className={style.link}>
      {title}
    </NavLink>
  );
}
