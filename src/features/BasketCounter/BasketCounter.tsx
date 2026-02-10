import { NavLink } from 'react-router-dom';
import style from './BasketCounter.module.css';
import useBasketCounter from './libs/useBasketCounter';

export default function BasketCounter() {
  const { basketProducts } = useBasketCounter();
  return (
    <NavLink to={'/basket'} className={style.counter}>
      {basketProducts.length}
    </NavLink>
  );
}
