import style from './CardProduct.module.css';
import { ICardProduct } from '../libs/types';
import ButtonDefault from '@shared/ui/Buttons/ButtonDefault';
import { CardProductConstants } from '../libs/CardProductConstants';
import useCardProduct from '../model/useCardProduct';

export default function CardProduct({ product }: ICardProduct) {
  const { handleClick } = useCardProduct();
  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <span className={style.span}>{CardProductConstants.new}</span>
        <img src={product.image[0]} alt={product.model} className={style.image} />
      </div>
      <div className={style.textContainer}>
        <h4 className={style.title}>{`${product.brand} ${product.model}`}</h4>
        <ButtonDefault handleClick={handleClick} css={style.button}>
          <>
            {CardProductConstants.button}
            <span className={style.buttonPrice}>{product.price}</span>
          </>
        </ButtonDefault>
      </div>
    </div>
  );
}
