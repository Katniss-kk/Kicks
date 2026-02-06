export interface IPagination {
  pagination: {
    pageCount: number;
    currentPage: number;
    handlePageClick: (event: { selected: number }) => void;
    isFirstPage: boolean;
    isLastPage: boolean;
    showCurrentPageButton: boolean;
    showEllipsis: boolean;
    showLastPage: boolean;
  };
}
