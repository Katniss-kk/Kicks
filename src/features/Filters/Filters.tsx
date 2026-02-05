import FiltersButtons from '@/widgets/Catalog/libs/CatalogConstants';
import style from './Filters.module.css';
import { IFilters } from './libs/types';
import FiltersConstants from './libs/FiltersConstants';
import ButtonSvg from '@/shared/ui/Buttons/ButtonSvg';
import Arrow from '@/assets/icons/Arrow';
import ButtonFilter from '@/shared/ui/Buttons/ButtonFilter';
import clsx from 'clsx';
import { useState } from 'react';
import ButtonFilterCheckBox from '@/shared/ui/Buttons/ButtonFilterCheckBox';
import { useDispatch, useSelector } from '@/services/store';
import { setColors, setSizes, setSort } from '@/services/slices/FiltersSlice/FiltersSlice';

export default function Filters({ content }: IFilters) {
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

  if (content === FiltersButtons[0].name) {
    return (
      <div className={style.modalContent}>
        <div>
          <div className={style.filterContainer}>
            <h4 className={style.titleFilter}>{FiltersConstants.FiltersConstant[0]}</h4>
            <ButtonSvg
              handleClick={handleClickSizesZone}
              css={clsx(style.buttonFilter, activeSizes ? style.buttonFilterActive : '')}
            >
              <Arrow />
            </ButtonSvg>
          </div>
          <div className={style.containerButtons}>
            {activeSizes
              ? FiltersConstants.SizesConstant.map((size) => {
                  const activeSize = sizes.includes(size);
                  return (
                    <ButtonFilter
                      handleClick={handleClickAddSize}
                      name={Number(size)}
                      css={clsx(style.buttonSize, activeSize ? style.buttonSizeActive : '')}
                      key={size}
                    >
                      <span>{size}</span>
                    </ButtonFilter>
                  );
                })
              : ''}
          </div>
        </div>
        <div>
          <div className={style.filterContainer}>
            <h4 className={style.titleFilter}>{FiltersConstants.FiltersConstant[1]}</h4>
            <ButtonSvg
              handleClick={handleClickColorsZone}
              css={clsx(style.buttonFilter, activeColors ? style.buttonFilterActive : '')}
            >
              <Arrow />
            </ButtonSvg>
          </div>
          <div className={style.containerButtons}>
            {activeColors
              ? FiltersConstants.ColorsConstant.map((color) => {
                  const className = color.charAt(0) + color.slice(1);
                  const activeColor = colors.includes(color);
                  return (
                    <ButtonFilter
                      handleClick={handleClickAddColor}
                      css={clsx(
                        style.buttonSize,
                        style[className],
                        activeColor ? style.buttonColorActive : ''
                      )}
                      name={color}
                      key={color}
                    />
                  );
                })
              : ''}
          </div>
        </div>
      </div>
    );
  }
  if (content === FiltersButtons[1].name) {
    return (
      <div className={style.modalContent}>
        <div className={style.filterContainer}>
          <h4 className={style.titleFilter}>{FiltersButtons[1].name}</h4>
          <ButtonSvg
            handleClick={handleClickSortZone}
            css={clsx(style.buttonFilter, activeSort ? style.buttonFilterActive : '')}
          >
            <Arrow />
          </ButtonSvg>
        </div>
        <div className={style.sortContainer}>
          {activeSort
            ? FiltersConstants.SortConstant.map((sorted) => {
                const activeBox = sort?.includes(sorted) || false;
                return (
                  <ButtonFilterCheckBox
                    name={sorted}
                    handleClick={handleClickAddSort}
                    active={activeBox}
                    key={sorted}
                  />
                );
              })
            : ''}
        </div>
      </div>
    );
  }
}
