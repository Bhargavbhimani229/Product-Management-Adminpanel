import React from "react";

const FilterComponent = ({
  productList,
  categoryFilter,
  setCategoryFilter,
  brandFilter,
  setBrandFilter,
  ratingFilter,
  setRatingFilter,
  inStockOnly,
  setInStockOnly,
}) => {
  // Extract unique categories and brands from productList
  const categories = ["All", ...new Set(productList.map((p) => p.category))];
  const brands = ["All", ...new Set(productList.map((p) => p.brand))];

  return (
    <div className="mb-3">
      <div className="row g-2">
        <div className="col-md-3">
          <select
            className="form-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <small className="text-muted">Category</small>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          <small className="text-muted">Brand</small>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
          >
            <option value={0}>All Ratings</option>
            <option value={1}>1 star & above</option>
            <option value={2}>2 stars & above</option>
            <option value={3}>3 stars & above</option>
            <option value={4}>4 stars & above</option>
            <option value={5}>5 stars</option>
          </select>
          <small className="text-muted">Minimum Rating</small>
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <input
            type="checkbox"
            id="stockCheck"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="form-check-input me-2"
          />
          <label htmlFor="stockCheck" className="form-check-label">
            In Stock Only
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
