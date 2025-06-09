import React from "react";

const SortComponent = ({ sortOption, setSortOption }) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">Sort by (Default)</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortComponent;
