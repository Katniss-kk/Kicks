import { useParams } from 'react-router-dom';
import type { RootState} from '@/services/store';
import { useSelector } from '@/services/store';

export default function useRecommendations() {
  const { id } = useParams();
  const products = useSelector((state: RootState) => state.Products.Products);
  const selectedProduct = products?.find((product) => product.id === Number(id?.replace(':', '')));
  const rec = products
    ?.filter((product) => product.brand === selectedProduct?.brand && product !== selectedProduct)
    .slice(0, 6);

  return { rec };
}
