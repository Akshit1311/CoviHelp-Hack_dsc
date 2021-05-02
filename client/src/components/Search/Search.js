import React, { useState } from "react";

// Styles
import "./Search.css";

//MaterialUi
import DropBox from "./DropBox/DropBox";
import HospitalStrip from "./HospitalStrip/HospitalStrip";
import Cities from "./Cities/Cities";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [isLoginModal, setIsLoginModal] = useState(false);

  return (
    <div className="search">
      <Cities />
      <div className="search__content">
        <div className="search__content__left">
          <h3>Filters</h3>
          <DropBox title="Tags" />
          <DropBox title="Tags" />
        </div>

        <div className="search__content__right">
          <div className="search__box">
            <i className="fas fa-search"></i>

            <input
              type="text"
              name="search"
              id="search"
              value={searchKey}
              placeholder="Search..."
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
          <HospitalStrip name="Hospital Name" />
          <HospitalStrip name="Hospital Name" />
          {/* <HospitalStrip name="Hospital Name" /> */}
          {/* <HospitalStrip name="Hospital Name" /> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
