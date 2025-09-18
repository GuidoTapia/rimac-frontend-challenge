import React from 'react';
import styles from './pagination.module.scss';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
  disabled?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  disabled = false,
}) => {
  const go = (p: number) => {
    if (!disabled && p >= 1 && p <= totalPages && p !== currentPage)
      onPageChange(p);
  };

  return (
    <nav
      className={[
        styles.pagination,
        disabled ? styles['pagination--disabled'] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label='Pagination'
    >
      <button
        className={styles.pagination__control}
        onClick={() => go(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        aria-label='Previous'
      >
        ‹
      </button>

      <div className={styles.pagination__pages}>
        <div>{currentPage}</div>
        <div>/</div>
        <div>{totalPages}</div>
      </div>

      <button
        className={styles.pagination__control}
        onClick={() => go(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        aria-label='Next'
      >
        ›
      </button>
    </nav>
  );
};

export default Pagination;
