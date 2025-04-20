'use client';

import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

export default function Pagination({ 
  pageCount, 
  onPageChange, 
  pageRangeDisplayed = 3, 
  marginPagesDisplayed = 1 
}) {
  if (pageCount <= 1) return null;
  
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="→"
      previousLabel="←"
      onPageChange={onPageChange}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName={styles.pagination}
      pageLinkClassName={styles.paginationNumber}
      previousLinkClassName={styles.paginationArrow}
      nextLinkClassName={styles.paginationArrow}
      activeLinkClassName={styles.active}
      breakClassName={styles.paginationDots}
    />
  );
}