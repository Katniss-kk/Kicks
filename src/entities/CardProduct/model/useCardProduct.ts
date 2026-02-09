import type { IProduct } from '@/types/types';
import { useNavigate } from 'react-router-dom';

export default function useCardProduct() {
  const navigate = useNavigate();
  const handleClickProduct = (product: IProduct) => {
    navigate(`/product/:${product.id}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const newProduct = (product: IProduct) => {
    const productDate = new Date(product.date);
    const currentDate = new Date();

    return (
      productDate.getFullYear() === currentDate.getFullYear() &&
      productDate.getMonth() === currentDate.getMonth()
    );
  };

  return { handleClickProduct, newProduct };
}
