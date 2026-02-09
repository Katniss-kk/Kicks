import PhotoSlider from '@/shared/ui/PhotoSlider';
import style from './CardProductsSelected.module.css';
import clsx from 'clsx';

import SizesConstant from '@/libs/constants/SizesConstant';
import ButtonFilter from '@/shared/ui/Buttons/ButtonFilter';
import ButtonDefault from '@/shared/ui/Buttons/ButtonDefault';
import useCardProductsSelected from '../model/useCardProductsSelected';
import CardProductsSelectedContant from '../libs/CardProductsSelectedContant';

export default function CardProductsSelected() {
  const {
    colorActive,
    sizeActive,
    handleClickBuy,
    handleClickColor,
    handleClickSize,
    handleClickToCard,
    selectedProduct,
  } = useCardProductsSelected();

  if (selectedProduct) {
    return (
      <div className={style.cardContainer}>
        <PhotoSlider product={selectedProduct} />
        <div className={style.textContainer}>
          {selectedProduct.sale > 0 ? (
            <span className={style.discountSpan}>{CardProductsSelectedContant.Discount}</span>
          ) : (
            ''
          )}
          <h1 className={clsx(style.text, style.title)}>
            {selectedProduct.brand} {selectedProduct.model}
          </h1>
          <h2 className={clsx(style.text, style.price)}>${selectedProduct.price}</h2>
        </div>
        <div className={style.container}>
          <h3 className={clsx(style.text, style.titleBlock)}>
            {CardProductsSelectedContant.Color}
          </h3>
          <div className={style.colorButtonContainer}>
            {selectedProduct.colors.map((color) => (
              <button
                className={clsx(style.colorButton, color)}
                onClick={() => handleClickColor(color)}
              >
                <span className={colorActive === color ? style.spanButtonColor : ''}></span>
              </button>
            ))}
          </div>
          <div className={style.container}>
            <h3 className={clsx(style.text, style.titleBlock)}>
              {CardProductsSelectedContant.Size}
            </h3>
            <div className={style.sizeButtonContainer}>
              {SizesConstant.map((size) => {
                const sizeReady = SizesConstant.includes(size);
                return (
                  <ButtonFilter
                    name={Number(size)}
                    key={size}
                    handleClick={handleClickSize}
                    disabled={!sizeReady}
                    css={clsx(
                      style.buttonSize,
                      sizeActive === size ? style.buttonSizeActive : '',
                      sizeReady ? '' : style.buttonSizeDisable
                    )}
                  >
                    {size}
                  </ButtonFilter>
                );
              })}
            </div>
          </div>
        </div>
        <div className={style.container}>
          <ButtonDefault handleClick={handleClickToCard} css={style.buttonCard}>
            {CardProductsSelectedContant.toCard}
          </ButtonDefault>
          <ButtonDefault handleClick={handleClickBuy} css={style.buttonBuy}>
            {CardProductsSelectedContant.buy}
          </ButtonDefault>
        </div>
      </div>
    );
  }
}
