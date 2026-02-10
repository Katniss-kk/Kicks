import CardsProductsBasket from '@/entities/CardsProductsBasket/ui';
import style from './CheckoutPage.module.css';
import OrderBasket from '@/entities/OrderBasket/ui';
import ContactsDetails from '@/features/ContactsDetails';

export default function CheckoutPage() {
  return (
    <section className={style.checkout}>
      <CardsProductsBasket />
      <OrderBasket button={false}/>
      <ContactsDetails />
    </section>
  );
}
