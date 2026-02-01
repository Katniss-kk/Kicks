import LinkCatalog from '@/shared/ui/Links/LinkCatalog';
import style from './NewsDrops.module.css';
import { NewsDropsContants } from './libs/NewsDropsContants';
import CardProduct from '@/entities/CardProduct/ui';
import products from '../../../public/db/sneakers.json';

export default function NewsDrops() {
  return (
    <div className={style.content}>
      <div className={style.textContainer}>
        <h3 className={style.title}>{NewsDropsContants.title}</h3>
        <LinkCatalog title={NewsDropsContants.titleLink} link={NewsDropsContants.link} />
      </div>
      <div className={style.cardsContainer}>
        {products.map((product) => (
          <div key={product.id}>
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
