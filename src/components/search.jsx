import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ submit, value, change, showResult }) => {
  return (
    <div>
      <form className="SearchBar" showResult={showResult} onSubmit={submit}>
        <input
          className="SearchInput"
          type="text"
          value={value}
          placeholder="Enter city"
          onChange={change}
        />
        <span className="SearchIcon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </form>
    </div>
  );
};

export default Search;
