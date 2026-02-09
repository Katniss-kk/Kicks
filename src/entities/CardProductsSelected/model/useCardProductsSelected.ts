import { useParams } from 'react-router-dom';
import type { RootState} from '@/services/store';
import { useSelector } from '@/services/store';
import { useMemo, useState } from 'react';

export default function useCardProductsSelected() {
  const [colorActive, setColorActive] = useState<string>('');
  const [sizeActive, setSizeActive] = useState<number | null>(null);

  const { id } = useParams();
  const products = useSelector((state: RootState) => state.Products.Products);
  const selectedProduct = useMemo(() => {
    return products?.find((product) => product.id === Number(id?.replace(':', '')));
  }, [products, id]);

  const handleClickColor = (color: string) => {
    setColorActive(color);
  };

  const handleClickSize = (size: number) => {
    setSizeActive(size);
  };

  const handleClickToCard = () => {};

  const handleClickBuy = () => {};

  return {
    colorActive,
    sizeActive,
    handleClickBuy,
    handleClickColor,
    handleClickSize,
    handleClickToCard,
    selectedProduct,
  };
}
