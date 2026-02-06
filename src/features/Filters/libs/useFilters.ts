import { useState } from 'react';
import { useDispatch, useSelector } from '@/services/store';
import { setColors, setSizes, setSort } from '@/services/slices/FiltersSlice/FiltersSlice';

export default function useFilters() {
  const { sizes, colors, sort } = useSelector((state) => state.Filters);
  const [activeColors, setActiveColors] = useState<boolean>(true);
  const [activeSizes, setActiveSizes] = useState<boolean>(true);
  const [activeSort, setActiveSort] = useState<boolean>(true);

  const dispatch = useDispatch();

  const handleClickSortZone = () => {
    setActiveSort(!activeSort);
  };

  const handleClickSizesZone = () => {
    setActiveSizes(!activeSizes);
  };

  const handleClickColorsZone = () => {
    setActiveColors(!activeColors);
  };

  const handleClickAddSize = (name: number) => {
    dispatch(setSizes(name));
  };

  const handleClickAddColor = (color: string) => {
    dispatch(setColors(color));
  };

  const handleClickAddSort = (sort: string) => {
    dispatch(setSort(sort));
  };
  return {
    activeColors,
    handleClickColorsZone,
    handleClickAddColor,
    activeSizes,
    handleClickAddSize,
    handleClickSizesZone,
    activeSort,
    handleClickAddSort,
    handleClickSortZone,
    colors,
    sizes,
    sort,
  };
}
