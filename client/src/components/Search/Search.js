import React, { useEffect, useState } from "react";

// Styles
import "./Search.css";

//MaterialUi
import DropBox from "./DropBox/DropBox";
import HospitalStrip from "./HospitalStrip/HospitalStrip";
import Cities from "./Cities/Cities";
import { getHosps } from "../../api";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [tags, setTags] = useState(["Private"]);
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getHosps();
        setHospitals(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    console.log({ hospitals });
  }, [hospitals]);

  return (
    <div className="search">
      <Cities />
      <div className="search__content">
        <div className="search__content__left">
          <h3>Filters</h3>
          <DropBox title="Tags" tags={tags} setTags={setTags} />
          <DropBox title="Tags" tags={tags} setTags={setTags} />
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

          {tags.length
            ? hospitals
                .filter(
                  ({ city, name, state }) =>
                    city.includes(searchKey) ||
                    name.includes(searchKey) ||
                    state.includes(searchKey)
                )
                .map((hos) => (
                  <HospitalStrip
                    key={hos._id}
                    name="Hospital Name"
                    hospital={hos}
                  />
                ))
            : hospitals
                .filter(
                  ({ city, name, state }) =>
                    city.includes(searchKey) ||
                    name.includes(searchKey) ||
                    state.includes(searchKey)
                )
                .map((hos) => (
                  <HospitalStrip
                    key={hos._id}
                    name="Hospital Name"
                    hospital={hos}
                  />
                ))}
          {/* <HospitalStrip name="Hospital Name" /> */}
          {/* <HospitalStrip name="Hospital Name" /> */}
          {/* <HospitalStrip name="Hospital Name" /> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
