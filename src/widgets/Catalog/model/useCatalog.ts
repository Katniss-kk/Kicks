import { RootState, useDispatch, useSelector } from '@/services/store';
import { useEffect, useState } from 'react';
import useLockScroll from '@/libs/useScrollLocked';
import { clearFilter } from '@/services/slices/FiltersSlice/FiltersSlice';
import filtrationProduct from '@/libs/filtrationProduct';
import { IProduct } from '@/types/types';

export default function useCatalog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>('');
  const products = useSelector((state: RootState) => state.Products.Products);
  const { sizes, colors, sort } = useSelector((state: RootState) => state.Filters);
  const [productsData, setProductsData] = useState<IProduct[] | null>(products);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductsData(products);
  }, [products, setProductsData]);

  const handleClickReset = () => {
    dispatch(clearFilter());
    setProductsData(products);
    onClose();
  };

  const handleClickApply = () => {
    if (products) {
      const filteredProducts = filtrationProduct({ sizes, colors, sort, products });
      console.log(filteredProducts);
      setProductsData(filteredProducts);
      onClose();
    }
  };

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  const handleClickFilterButton = (content: string) => {
    setModalContent(content);
    setIsOpen(!isOpen);
  };

  useLockScroll(isOpen);

  return {
    productsData,
    handleClickFilterButton,
    handleClickReset,
    handleClickApply,
    modalContent,
    isOpen,
    onClose,
    products,
  };
}
