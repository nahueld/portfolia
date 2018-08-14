import React from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";

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
      <li
        className="prev-btn page-item"
        onClick={() => !isLoading && onPrevClick()}
      >
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
            className={`page-btn page-item ${index === currentPage &&
              "active"}`}
          >
            <a className="page-link">{index}</a>
          </li>
        )
    );

    const nextButton = currentPage + 2 < totalPages && (
      <li
        className="next-btn page-item"
        onClick={() => !isLoading && onNextClick()}
      >
        <a className="page-link">Next</a>
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

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPrevClick: PropTypes.func,
  onPageClick: PropTypes.func,
  onNextClick: PropTypes.func,
  isLoading: PropTypes.bool
};

Pagination.defaultProps = {
  totalPages: 0,
  currentPage: 0,
  onPrevClick: () => console.error("callback is undefined"),
  onPageClick: () => console.error("callback is undefined"),
  onNextClick: () => console.error("callback is undefined"),
  isLoading: false
};

export default Pagination;
