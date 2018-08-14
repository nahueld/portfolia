import React from "react";
import { observer } from "mobx-react";

const SearchBar = observer(({ onSearch, onChange, isLoading, query }) => (
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Enter a topic"
      aria-label="Enter a topic"
      value={query}
      onChange={onChange}
      onKeyPress={event => event.key === "Enter" && !isLoading && onSearch()}
    />
    <div className="input-group-append">
      <button
        disabled={isLoading || query.length === 0}
        onClick={onSearch}
        className="btn btn-outline-primary"
        type="button"
      >
        {isLoading ? (
          <i className="fa fa-circle-o-notch fa-spin fa-fw" />
        ) : (
          <i className="fa fa-search" aria-hidden="true" />
        )}
      </button>
    </div>
  </div>
));

export default SearchBar;
