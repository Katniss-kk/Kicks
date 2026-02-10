import clsx from 'clsx';
import style from './OrderBasket.module.css';
import OrderBasketConstant from '../libs/OrderBasketConstant';
import PriceDelivery from '../libs/PriceDelivery';
import useOrderBasket from '../model/useOrderBasket';

export default function OrderBasket({ button = true }: { button?: boolean }) {
  const { allItems, countProducts, totalCount, handleClickButton } = useOrderBasket();
  return (
    <div className={style.orderContainer}>
      <h2 className={clsx(style.text, style.title)}>{OrderBasketConstant.title}</h2>
      <div className={style.container}>
        <span className={clsx(style.text, style.span)}>
          {allItems} {OrderBasketConstant.allItems}
        </span>
        <span className={clsx(style.text, style.span)}>
          {OrderBasketConstant.value}
          {countProducts}
        </span>
      </div>
      <div className={style.container}>
        <span className={clsx(style.text, style.span)}>{OrderBasketConstant.delivery}</span>
        <span className={clsx(style.text, style.span)}>
          {OrderBasketConstant.value} {PriceDelivery}
        </span>
      </div>
      <div className={style.container}>
        <span className={clsx(style.text, style.span)}>{OrderBasketConstant.sales}</span>
        <span className={clsx(style.text, style.span)}>-</span>
      </div>
      <div className={style.container}>
        <h3 className={clsx(style.text, style.title)}>{OrderBasketConstant.total}</h3>
        <span className={clsx(style.text, style.title)}>
          {OrderBasketConstant.value}
          {totalCount}
        </span>
      </div>
      {button ? (
        <button
          className={clsx(style.button, allItems === 0 ? style.disabled : '')}
          onClick={() => handleClickButton()}
          disabled={allItems === 0 ? true : false}
        >
          {OrderBasketConstant.button}
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
