import type { IProduct } from '@/types/types';

export default function useCardProduct() {
  const handleClick = () => {};

  const newProduct = (product: IProduct) => {
    const productDate = new Date(product.date);
    const currentDate = new Date();

    return (
      productDate.getFullYear() === currentDate.getFullYear() &&
      productDate.getMonth() === currentDate.getMonth()
    );
  };

  return { handleClick, newProduct };
}
