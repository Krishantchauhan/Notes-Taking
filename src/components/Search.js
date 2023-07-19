import React from "react";
import { MdSearch } from "react-icons/md";

const search = () => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input type="text" placeholder="Type to Search...." />
    </div>
  );
};

export default search;
