import React from "react";

const SearchBar = ({ onSearch, onChange }) => (
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Enter a topic"
      aria-label="Enter a topic"
      aria-describedby="basic-addon2"
      onChange={onChange}
    />
    <div className="input-group-append">
      <button
        onClick={onSearch}
        className="btn btn-outline-primary"
        type="button"
      >
        <i className="fa fa-search" aria-hidden="true" />
      </button>
    </div>
  </div>
);

export default SearchBar;
