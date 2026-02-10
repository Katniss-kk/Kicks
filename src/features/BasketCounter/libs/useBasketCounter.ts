import type { RootState} from '@/services/store';
import { useSelector } from '@/services/store';

export default function useBasketCounter() {
  const basketProducts = useSelector((state: RootState) => state.Basket.products);
  return { basketProducts };
}
