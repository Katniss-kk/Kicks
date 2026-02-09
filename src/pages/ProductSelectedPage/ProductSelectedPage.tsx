import Recomendations from '@/widgets/Recomendations';
import style from './ProductSelectedPage.module.css';
import CardProductsSelected from '@/entities/CardProductsSelected/ui';

export default function ProductSelectedPage() {
  return (
    <section className={style.container}>
      <CardProductsSelected />
      <Recomendations />
    </section>
  );
}
