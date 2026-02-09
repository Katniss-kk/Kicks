import type { RootState } from '@/services/store';
import { useSelector } from '@/services/store';

export default function useNewsDrops() {
  const products = useSelector((state: RootState) => {
    const productsArray = state.Products.Products;

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
  });
  return { products };
}
