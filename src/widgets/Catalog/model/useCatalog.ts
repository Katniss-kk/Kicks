import type { RootState} from '@/services/store';
import { useDispatch, useSelector } from '@/services/store';
import { useEffect, useState, useMemo } from 'react';
import useLockScroll from '@/libs/useScrollLocked';
import { clearFilter } from '@/services/slices/FiltersSlice/FiltersSlice';
import filtrationProduct from '@/libs/filtrationProduct';
import type { IProduct } from '@/types/types';

const PRODUCTS_PER_PAGE = 6;

export default function useCatalog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>('');
  const products = useSelector((state: RootState) => state.Products.Products);
  const { sizes, colors, sort } = useSelector((state: RootState) => state.Filters);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products || []);

  const [currentPage, setCurrentPage] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredProducts(products || []);
    setCurrentPage(0);
  }, [products]);

  const productsData = useMemo(() => {
    const startIndex = currentPage * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const pageCount = useMemo(() => {
    return Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  }, [filteredProducts.length]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClickReset = () => {
    dispatch(clearFilter());
    setFilteredProducts(products || []);
    setCurrentPage(0);
    onClose();
  };

  const handleClickApply = () => {
    if (products) {
      const filtered = filtrationProduct({ sizes, colors, sort, products });
      if (filtered) {
        setFilteredProducts(filtered);
        setCurrentPage(0);
        onClose();
      }
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

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pageCount - 1;
  const showCurrentPageButton = currentPage > 0 && currentPage < pageCount - 1;
  const showEllipsis = currentPage < pageCount - 2;
  const showLastPage = pageCount > 1;

  return {
    filteredProducts,
    productsData,
    handleClickFilterButton,
    handleClickReset,
    handleClickApply,
    modalContent,
    isOpen,
    onClose,
    products,
    pagination: {
      pageCount,
      currentPage,
      handlePageClick,
      totalItems: filteredProducts.length,
      isFirstPage,
      isLastPage,
      showCurrentPageButton,
      showEllipsis,
      showLastPage,
    },
  };
}
