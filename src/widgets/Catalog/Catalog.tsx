import CardProduct from '@/entities/CardProduct/ui';
import style from './Catalog.module.css';
import CatalogConstants from './libs/CatalogConstants';
import FullModal from '@/shared/ui/FullModal';
import ButtonFilterOpen from '@/shared/ui/Buttons/ButtonFilterOpen';
import Filters from '@/features/Filters';
import useCatalog from './model/useCatalog';
import Pagination from './model/Pagination';

export default function Catalog() {
  const {
    filteredProducts,
    productsData,
    handleClickFilterButton,
    handleClickReset,
    handleClickApply,
    modalContent,
    isOpen,
    onClose,
    products,
    pagination,
  } = useCatalog();

  if (productsData) {
    return (
      <div className={style.catalog}>
        <div className={style.container}>
          <div className={style.containerButtons}>
            <ButtonFilterOpen
              name={CatalogConstants.FiltersButtons[0].name}
              svg={CatalogConstants.FiltersButtons[0].svg}
              handleClick={handleClickFilterButton}
            />
            <ButtonFilterOpen
              name={CatalogConstants.FiltersButtons[1].name}
              svg={CatalogConstants.FiltersButtons[1].svg}
              handleClick={handleClickFilterButton}
            />
          </div>
          <div>
            <h2 className={style.title}>{CatalogConstants.CatalogInfo.title}</h2>
            <p className={style.items}>
              {products === null || products === undefined
                ? CatalogConstants.CatalogInfo.error
                : filteredProducts.length === 0
                  ? `${filteredProducts.length} ${CatalogConstants.CatalogInfo.products} ${CatalogConstants.CatalogInfo.nullFilterProducts}`
                  : `${filteredProducts.length} ${CatalogConstants.CatalogInfo.products}`}
            </p>
          </div>
          <div className={style.productsContainer}>
            {productsData.map((product) => (
              <div key={product.id}>
                <CardProduct product={product} />
              </div>
            ))}
          </div>

          <Pagination pagination={pagination} />
        </div>
        <FullModal
          title={modalContent}
          isOpen={isOpen}
          onClose={onClose}
          handleClickReset={handleClickReset}
          handleClickApply={handleClickApply}
        >
          <Filters content={modalContent} />
        </FullModal>
      </div>
    );
  }
  return null;
}
