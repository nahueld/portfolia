import React from "react";
import { observer } from "mobx-react";

const Pagination = observer(
  ({
    totalPages,
    currentPage,
    onPrevClick,
    onPageClick,
    onNextClick,
    isLoading
  }) => {
    const prevButton = currentPage !== 1 && (
      <li className="page-item" onClick={() => !isLoading && onPrevClick()}>
        <a className="page-link">Previous</a>
      </li>
    );

    const pageNumbers = [currentPage - 1, currentPage, currentPage + 1].map(
      index =>
        index <= totalPages &&
        index !== 0 && (
          <li
            key={index}
            onClick={() =>
              index !== currentPage && !isLoading && onPageClick(index)
            }
            className={`page-item ${index === currentPage && "active"}`}
          >
            <a className="page-link">{index}</a>
          </li>
        )
    );

    const nextButton = currentPage + 2 < totalPages && (
      <li className="page-item">
        <a onClick={() => !isLoading && onNextClick()} className="page-link">
          Next
        </a>
      </li>
    );

    return (
      currentPage && (
        <nav>
          <ul className="pagination">
            {prevButton}
            {pageNumbers}
            {nextButton}
          </ul>
        </nav>
      )
    );
  }
);

export default Pagination;
