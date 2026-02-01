import { NavLink } from 'react-router-dom';
import { ILinksCatalog } from './libs/types';
import style from './LinkCatalog.module.css';

export default function LinkCatalog({ title, link }: ILinksCatalog) {
  return (
    <NavLink to={link} className={style.link}>
      {title}
    </NavLink>
  );
}
