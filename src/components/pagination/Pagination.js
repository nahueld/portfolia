import React from "react";
import { observer } from "mobx-react";

const Pagination = observer(
  ({ totalPages, currentPage, onPrevClick, onPageClick, onNextClick }) =>
    currentPage && (
      <nav>
        <ul className="pagination">
          {currentPage !== 1 && (
            <li className="page-item">
              <a onClick={onPrevClick} className="page-link">
                Previous
              </a>
            </li>
          )}
          {[currentPage - 1, currentPage, currentPage + 1].map(
            index =>
              index <= totalPages &&
              index !== 0 && (
                <li
                  key={index}
                  onClick={() => index !== currentPage && onPageClick(index)}
                  className={`page-item ${index === currentPage && "active"}`}
                >
                  <a className="page-link">{index}</a>
                </li>
              )
          )}
          {currentPage + 2 < totalPages && (
            <li className="page-item">
              <a onClick={onNextClick} className="page-link">
                Next
              </a>
            </li>
          )}
        </ul>
      </nav>
    )
);

export default Pagination;
