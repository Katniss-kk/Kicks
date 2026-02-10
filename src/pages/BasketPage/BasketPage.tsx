import CardsProductsBasket from '@/entities/CardsProductsBasket/ui';
import style from './BasketPage.module.css';
import OrderBasket from '@/entities/OrderBasket/ui';

export default function BasketPage() {
  return (
    <section className={style.basket}>
      <CardsProductsBasket />
      <OrderBasket />
    </section>
  );
}
