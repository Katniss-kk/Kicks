import CardProduct from '@/entities/CardProduct/ui';
import style from './Catalog.module.css';
import FiltersButtons from './libs/CatalogConstants';
import { RootState, useDispatch, useSelector } from '@/services/store';
import FullModal from '@/shared/ui/FullModal';
import { useState } from 'react';
import ButtonFilterOpen from '@/shared/ui/Buttons/ButtonFilterOpen';
import Filters from '@/features/Filters';
import useLockScroll from '@/libs/useScrollLocked';
import { clearFilter } from '@/services/slices/FiltersSlice/FiltersSlice';

export default function Catalog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>('');
  const products = useSelector((state: RootState) => state.Products.Products);
  const dispatch = useDispatch()

  const handleClickReset = () => {
    dispatch(clearFilter())
  }

  const onClose = () => {
    setIsOpen(!isOpen);
  };
  const handleClickFilterButton = (content: string) => {
    setModalContent(content);
    setIsOpen(!isOpen);
  };
  useLockScroll(isOpen);
  if (products) {
    return (
      <div className={style.container}>
        <div className={style.containerButtons}>
          <ButtonFilterOpen
            name={FiltersButtons[0].name}
            svg={FiltersButtons[0].svg}
            handleClick={handleClickFilterButton}
          />
          <ButtonFilterOpen
            name={FiltersButtons[1].name}
            svg={FiltersButtons[1].svg}
            handleClick={handleClickFilterButton}
          />
        </div>
        <div>
          <h2 className={style.title}>Life Style Shoes</h2>
          <p className={style.items}>{products.length} items</p>
        </div>
        <div className={style.productsContainer}>
          {products.map((product) => (
            <div key={product.id}>
              <CardProduct product={product} />
            </div>
          ))}
        </div>
        <FullModal title={modalContent} isOpen={isOpen} onClose={onClose} handleClickReset={handleClickReset}>
          <Filters content={modalContent} />
        </FullModal>
      </div>
    );
  }
  return null;
}
