import React from 'react';
import { MdSearch } from 'react-icons/md';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';


const search = ({ handleSearchNote }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="search-input"
        onChange={(event) => handleSearchNote(event.target.value)}
      />
      {/* <a href="#" className="search-btn"> */}
        {/* <FontAwesomeIcon icon={faSearch} /> */}
      {/* </a> */}
    </div>
  );
};

export default search;
 