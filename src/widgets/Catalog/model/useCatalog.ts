import type { RootState } from '@/services/store';
import { useDispatch, useSelector } from '@/services/store';
import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import useLockScroll from '@/libs/useScrollLocked';
import { clearFilter } from '@/services/slices/FiltersSlice/FiltersSlice';
import filtrationProduct from '@/libs/filtrationProduct';
import type { IProduct } from '@/types/types';
import { useParams } from 'react-router-dom';
import CheckIsDesktop from '@/libs/CheckIsDesktop';

interface Filters {
  sizes: number[];
  colors: string[];
  sort: string;
}

export default function useCatalog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>('');
  const products = useSelector((state: RootState) => state.Products.Products);
  const { sizes, colors, sort } = useSelector((state: RootState) => state.Filters);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [tempFilters, setTempFilters] = useState<Filters>({ 
    sizes: [], 
    colors: [], 
    sort: ''
  });
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const dispatch = useDispatch();
  
  const isDesktop = CheckIsDesktop();
  const isFirstRender = useRef(true);
  
  const PRODUCTS_PER_PAGE = isDesktop ? 9 : 6;

  const filterProductsByCategory = useCallback((products: IProduct[], categoryId: string | undefined) => {
    if (!categoryId || !products) return products;
    
    if (categoryId === 'new') {
      return products.filter((product) => {
        const productDate = new Date(product.date);
        const currentDate = new Date();
        return (
          productDate.getFullYear() === currentDate.getFullYear() &&
          productDate.getMonth() === currentDate.getMonth()
        );
      });
    } else {
      return products.filter((product) => 
        product.category.toLowerCase() === categoryId.toLowerCase()
      );
    }
  }, []);

  const applyFilters = useCallback((filtersToApply: Filters) => {
    if (!products) return;

    const categoryFiltered = filterProductsByCategory(products, id);
    
    const filtered = filtrationProduct({ 
      sizes: filtersToApply.sizes, 
      colors: filtersToApply.colors, 
      sort: filtersToApply.sort, 
      products: categoryFiltered 
    });
    
    if (filtered) {
      setFilteredProducts(filtered);
      setCurrentPage(0);
    }
  }, [products, id, filterProductsByCategory]);

  useEffect(() => {
    if (products && isFirstRender.current) {
      const categoryFiltered = filterProductsByCategory(products, id);
      setFilteredProducts(categoryFiltered);
      setTempFilters({ 
        sizes: sizes || [], 
        colors: colors || [], 
        sort: sort || '' 
      });
      isFirstRender.current = false;
    }
  }, [products, id, filterProductsByCategory, sizes, colors, sort]);

  useEffect(() => {
    if (isDesktop && products && !isFirstRender.current) {
      applyFilters({ 
        sizes: sizes || [], 
        colors: colors || [], 
        sort: sort || '' 
      });
    }
  }, [sizes, colors, sort, isDesktop, products, applyFilters]);

  useEffect(() => {
    if (!isDesktop) {
      setTempFilters({ 
        sizes: sizes || [], 
        colors: colors || [], 
        sort: sort || '' 
      });
    }
  }, [sizes, colors, sort, isDesktop]);

  const productsData = useMemo(() => {
    const startIndex = currentPage * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, PRODUCTS_PER_PAGE]);

  const pageCount = useMemo(() => {
    return Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  }, [filteredProducts.length, PRODUCTS_PER_PAGE]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClickReset = () => {
    dispatch(clearFilter());
    if (!isDesktop) {
      setTempFilters({ sizes: [], colors: [], sort: '' });
    }
    
    if (products) {
      const categoryFiltered = filterProductsByCategory(products, id);
      setFilteredProducts(categoryFiltered);
      setCurrentPage(0);
    }
    onClose();
  };

  const handleClickApply = () => {
    if (!isDesktop) {
      applyFilters(tempFilters);
    } else {
      applyFilters({ 
        sizes: sizes || [], 
        colors: colors || [], 
        sort: sort || '' 
      });
    }
    onClose();
  };

  const handleTempFilterChange = (newFilters: Partial<Filters>) => {
    if (!isDesktop) {
      setTempFilters(prev => ({ ...prev, ...newFilters }));
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
    id,
    filteredProducts,
    productsData,
    handleClickFilterButton,
    handleClickReset,
    handleClickApply,
    handleTempFilterChange,
    modalContent,
    isOpen,
    onClose,
    products,
    isDesktop,
    tempFilters,
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