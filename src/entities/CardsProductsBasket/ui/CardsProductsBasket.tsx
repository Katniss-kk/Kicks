import { useDispatch, useSelector } from '@/services/store';
import style from './CardsProductsBasket.module.css';
import clsx from 'clsx';
import DeleteBasket from '@/assets/icons/DeleteBasket';
import CardsProductsBasketConstant from '../libs/CardsProductsBasketConstant';
import { delProductId } from '@/services/slices/BasketSlice/BasketSlice';

export default function CardsProductsBasket() {
  const { products } = useSelector((state) => state.Basket);

  const dispatch = useDispatch();
  const handleClickDeleteItem = (productId: number) => {
    dispatch(delProductId(productId));
  };

  return (
    <div className={style.basketContainer}>
      <div className={style.titleContainer}>
        <h2 className={clsx(style.text, style.titleCards)}>
          {CardsProductsBasketConstant.titleCards}
        </h2>
        <p className={style.paragraph}>{CardsProductsBasketConstant.aboutCards}</p>
      </div>
      {products.map((product) => (
        <div className={style.cardContainer} key={product.product.id}>
          <img
            src={product.product.image[0]}
            alt={`${product.product.brand} ${product.product.model}`}
            className={style.cardPhoto}
          />
          <div className={style.cardTextContainer}>
            <h3 className={clsx(style.text, style.title)}>
              {product.product.brand} {product.product.model}
            </h3>
            <h6 className={clsx(style.text, style.aboutText)}>{product.color}</h6>
            <h6 className={clsx(style.text, style.aboutText)}>
              {CardsProductsBasketConstant.size} {product.size}
            </h6>
            <span className={style.price}>
              {CardsProductsBasketConstant.value}
              {product.product.price}
            </span>
            <button
              className={style.buttonDelete}
              onClick={() => handleClickDeleteItem(product.product.id)}
            >
              <DeleteBasket />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
