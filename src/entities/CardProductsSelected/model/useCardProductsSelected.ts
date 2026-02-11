import { useNavigate, useParams } from 'react-router-dom';
import type { RootState } from '@/services/store';
import { useDispatch, useSelector } from '@/services/store';
import { useEffect, useMemo, useState } from 'react';
import { addProduct } from '@/services/slices/BasketSlice/BasketSlice';

export default function useCardProductsSelected() {
  const [colorActive, setColorActive] = useState<string | null>(null);
  const [sizeActive, setSizeActive] = useState<number | null>(null);
  const [validationSize, setValidationSize] = useState<boolean>(true);
  const [validationColor, setValidationColor] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setColorActive(null);
      setSizeActive(null);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [id]);

  const products = useSelector((state: RootState) => state.Products.Products);
  const selectedProduct = useMemo(() => {
    return products?.find((product) => product.id === Number(id?.replace(':', '')));
  }, [products, id]);

  const basketProducts = useSelector((state: RootState) => state.Basket.products);
  const inBasket = basketProducts.some((product) => product.product.id === selectedProduct?.id);

  const handleClickColor = (color: string) => {
    setColorActive(color);
    setValidationColor(true);
  };

  const handleClickSize = (size: number) => {
    setSizeActive(size);
    setValidationSize(true);
  };

  const handleClickToCard = () => {
    if (selectedProduct) {
      if (colorActive === null) {
        setValidationColor(false);
      }
      if (sizeActive === null) {
        setValidationSize(false);
      }
      if (colorActive !== null && sizeActive !== null) {
        dispatch(addProduct({ product: selectedProduct, size: sizeActive, color: colorActive }));
      }
    }
    return null;
  };

  const handleClickBuy = () => {
    if (selectedProduct) {
      if (colorActive === null) {
        setValidationColor(false);
      }
      if (sizeActive === null) {
        setValidationSize(false);
      }
      if (colorActive !== null && sizeActive !== null) {
        dispatch(addProduct({ product: selectedProduct, size: sizeActive, color: colorActive }));
        navigate('/checkout');
      }
    }
    return null;
  };

  return {
    colorActive,
    sizeActive,
    handleClickBuy,
    handleClickColor,
    handleClickSize,
    handleClickToCard,
    selectedProduct,
    inBasket,
    validationColor,
    validationSize,
  };
}
