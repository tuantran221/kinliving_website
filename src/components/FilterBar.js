import React, { useState } from "react";
import PostData from "../data/PostData";
import "../Styles/FilterBar.css";

const FilterBar = ({ onFilter }) => {
  const districts = [...new Set(PostData.map((post) => post.district))];
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
    onFilter(district);
  };

  return (
    <div className="filter">
      <div className="filter-bar">
        <button
          className={`filter-button ${selectedDistrict === "" ? "active" : ""}`}
          onClick={() => handleDistrictClick("")}
        >
          All
        </button>
        {districts.map((district) => (
          <button
            className={`filter-button ${
              selectedDistrict === district ? "active" : ""
            }`}
            key={district}
            onClick={() => handleDistrictClick(district)}
          >
            {district}
          </button>
        ))}
      </div>
      <hr style={{width:"93%"}}></hr>
    </div>
  );
};

export default FilterBar;