import { NavLink } from 'react-router-dom';
import style from './LinkCategory.module.css';
import ArrowRightUp from '@assets/icons/ArrowRightUp';
import type { ILinkCategory } from './libs/types';
import clsx from 'clsx';

export default function LinkCategory({ link, css }: ILinkCategory) {
  return (
    <NavLink to={link} className={clsx(style.link, css)}>
      <ArrowRightUp />
    </NavLink>
  );
}
