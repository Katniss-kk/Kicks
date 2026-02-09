import type { RootState } from '@/services/store';
import { useSelector } from '@/services/store';
import { useMemo } from 'react';

export default function useNewsDrops() {
  const productsArray = useSelector((state: RootState) => state.Products.Products);

  const products = useMemo(() => {
    if (!productsArray) {
      return [];
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    return productsArray
      .filter((product) => {
        const productDate = new Date(product.date);
        return productDate.getFullYear() === currentYear && productDate.getMonth() === currentMonth;
      })
      .slice(0, 4);
  }, [productsArray]);

  return { products };
}
