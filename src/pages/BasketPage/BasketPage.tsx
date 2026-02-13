import CardsProductsBasket from '@/entities/CardsProductsBasket/ui';
import style from './BasketPage.module.css';
import OrderBasket from '@/entities/OrderBasket/ui';
import Recomendations from '@/widgets/Recomendations';

export default function BasketPage() {
  return (
    <section className={style.basket}>
      <div className={style.containerBasket}>
      <CardsProductsBasket />
      <OrderBasket />
      </div>
      <Recomendations />
    </section>
  );
}
