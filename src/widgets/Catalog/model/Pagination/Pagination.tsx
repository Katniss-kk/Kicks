import Arrow from '@/assets/icons/Arrow';
import style from './Pagination.module.css';
import clsx from 'clsx';
import type { IPagination } from './libs/types';

export default function Pagination({ pagination }: IPagination) {
  const {
    isFirstPage,
    isLastPage,
    showCurrentPageButton,
    showEllipsis,
    showLastPage,
    pageCount,
    currentPage,
    handlePageClick,
  } = pagination;

  if (pageCount <= 1) return null;

  return (
    <div className={style.containerPagination}>
      {/* Кнопка назад */}
      <button
        className={clsx(
          style.buttonPagination,
          style.buttonPaginationPrev,
          isFirstPage && style.disabled
        )}
        onClick={() => !isFirstPage && handlePageClick({ selected: currentPage - 1 })}
        disabled={isFirstPage}
      >
        <Arrow />
      </button>

      {/* Первая страница */}
      <button
        className={clsx(style.buttonPagination, isFirstPage && style.buttonPaginationActive)}
        onClick={() => handlePageClick({ selected: 0 })}
      >
        1
      </button>

      {/* Текущая страница (если не первая и не последняя) */}
      {showCurrentPageButton && (
        <button className={clsx(style.buttonPagination, style.buttonPaginationActive)}>
          {currentPage + 1}
        </button>
      )}

      {/* Многоточие если текущая не рядом с последней */}
      {showEllipsis && <span className={style.spanPagination}>...</span>}

      {/* Последняя страница (если она не первая) */}
      {showLastPage && pageCount > 1 && (
        <button
          className={clsx(style.buttonPagination, isLastPage && style.buttonPaginationActive)}
          onClick={() => handlePageClick({ selected: pageCount - 1 })}
        >
          {pageCount}
        </button>
      )}

      {/* Кнопка вперед */}
      <button
        className={clsx(
          style.buttonPagination,
          style.buttonPaginationNext,
          isLastPage && style.disabled
        )}
        onClick={() => !isLastPage && handlePageClick({ selected: currentPage + 1 })}
        disabled={isLastPage}
      >
        <Arrow />
      </button>
    </div>
  );
}
