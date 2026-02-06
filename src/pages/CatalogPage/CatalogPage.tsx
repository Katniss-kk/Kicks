import Catalog from '@/widgets/Catalog';
import style from './CatalogPage.module.css';
import AdBanerCatalog from '@/shared/ui/AdBanerCatalog';

export default function CatalogPage() {
  return (
    <section className={style.page}>
      <AdBanerCatalog />
      <Catalog />
    </section>
  );
}
