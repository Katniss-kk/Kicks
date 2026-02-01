import { NavLink } from 'react-router-dom';
import Profile from '@assets/icons/Profile';
import style from './ProfileLink.module.css';

export default function ProfileLink() {
  return (
    <NavLink to={'/profile'} className={style.link}>
      <Profile />
    </NavLink>
  );
}
