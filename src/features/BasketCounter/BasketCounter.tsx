import { NavLink } from 'react-router-dom';
import style from './BasketCounter.module.css';

export default function BasketCounter() {
  return (
    <NavLink to={'/basket'} className={style.counter}>
      0
    </NavLink>
  );
}
