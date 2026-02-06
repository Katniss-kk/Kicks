import { IProduct } from '@/types/types';

// Обновленный интерфейс
interface IUseFiltration {
  sizes: number[];
  colors: string[];
  sort: string | null; // Добавляем возможность null
  products: IProduct[];
}

// Обновленная функция
export default function filtrationProduct({
  sizes,
  colors,
  sort,
  products,
}: IUseFiltration): IProduct[] | null {
  if (!products || !Array.isArray(products)) {
    return null;
  }

  let result = [...products];

  // Фильтрация по размерам
  if (sizes.length > 0) {
    result = result.filter((product) => {
      return product.sizes?.some((size) => sizes.includes(size));
    });
  }

  // Фильтрация по цветам
  if (colors.length > 0) {
    result = result.filter((product) => {
      return product.colors?.some((color) => colors.includes(color));
    });
  }

  // Сортировка (если sort не null)
  if (sort && sort !== 'sale') {
    result = sortProducts(result, sort);
  }

  return result;
}

// Обновленная функция сортировки
function sortProducts(products: IProduct[], sortOption: string): IProduct[] {
  const sortedProducts = [...products];

  switch (sortOption) {
    case 'new':
      return sortedProducts.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });

    case 'old':
      return sortedProducts.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateA - dateB;
      });

    case 'high price':
      return sortedProducts.sort((a, b) => b.price - a.price);

    case 'low price':
      return sortedProducts.sort((a, b) => a.price - b.price);

    default:
      return sortedProducts;
  }
}
