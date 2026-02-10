import type { RootState} from '@/services/store';
import { useSelector } from '@/services/store';
import PriceDelivery from '../libs/PriceDelivery';
import { useNavigate } from 'react-router-dom';

export default function useOrderBasket() {
  const basket = useSelector((state: RootState) => state.Basket.products);
  const allItems = basket.length;
  const countProducts = basket.reduce((sum, item) => sum + item.product.price, 0);
  const totalCount = countProducts + PriceDelivery;

  const navigate = useNavigate()
  const handleClickButton = () => {
    navigate('/checkout')
  }

  return { allItems, countProducts, totalCount, handleClickButton };
}
