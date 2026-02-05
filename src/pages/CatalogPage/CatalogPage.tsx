import Catalog from '@/widgets/Catalog';
import style from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <section className={style.page}>
      <Catalog />
    </section>
  );
}
