import Arrow from '@/assets/icons/Arrow';
import FiltersSvg from '@/assets/icons/FiltersSvg';

const FiltersButtons = [
  {
    name: 'Filters',
    svg: <FiltersSvg />,
  },
  {
    name: 'Sort',
    svg: <Arrow />,
  },
];

const CatalogInfo = {
  title: 'Life Style Shoes',
  products: 'items.',
  nullFilterProducts: 'Please change filters settings',
  error: 'Ops... server error',
};

export default { FiltersButtons, CatalogInfo };
