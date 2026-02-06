import LinkCatalog from '@/shared/ui/Links/LinkCatalog';
import style from './NewsDrops.module.css';
import { NewsDropsContants } from './libs/NewsDropsContants';
import CardProduct from '@/entities/CardProduct/ui';
import type { RootState} from '@/services/store';
import { useSelector } from '@/services/store';

export default function NewsDrops() {
  const products = useSelector((state: RootState) => state.Products.Products);
  if (products) {
    const filteredProducts = products
      .filter((product) => {
        const productDate = new Date(product.date);
        const currentDate = new Date();

        return (
          productDate.getFullYear() === currentDate.getFullYear() &&
          productDate.getMonth() === currentDate.getMonth()
        );
      })
      .slice(0, 4);
    return (
      <div className={style.content}>
        <div className={style.textContainer}>
          <h3 className={style.title}>{NewsDropsContants.title}</h3>
          <LinkCatalog title={NewsDropsContants.titleLink} link={NewsDropsContants.link} />
        </div>
        <div className={style.cardsContainer}>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <CardProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
