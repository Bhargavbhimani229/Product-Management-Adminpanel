import React, { useState } from "react";
import FilterComponent from "../components/FilterComponent";
import SortComponent from "../components/SortComponent";
import SearchComponent from "../components/SearchComponent";
import CartComponent from "../components/CartComponent";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const Client = ({ productList, handleDelete, handleEdit }) => {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [brandFilter, setBrandFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQty = (productId, newQty) => {
    if (newQty < 1) return;
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, qty: newQty } : item
      )
    );
  };

  const filteredProducts = productList
    .filter((val) =>
      val.pName.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((val) =>
      categoryFilter === "All" ? true : val.category === categoryFilter
    )
    .filter((val) =>
      brandFilter === "All" ? true : val.brand === brandFilter
    )
    .filter((val) => val.rating >= ratingFilter)
    .filter((val) =>
      !inStockOnly ? true : parseInt(val.stock) > 0
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    return 0;
  });

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* 🔷 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            🛍️ Product Store
          </a>
          <div className="ms-auto">
            <button className="btn btn-light fw-semibold">
              🛒 Cart ({totalItems})
            </button>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Explore & Shop</h2>
          <p className="text-secondary fs-5">
            Search, filter, and manage products with ease
          </p>
        </div>

        {/* Search */}
        <div className="mb-4">
          <SearchComponent
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </div>

        {/* Filters and Sort */}
        <div className="row mb-4 align-items-center">
          <div className="col-lg-8 mb-3 mb-lg-0">
            <FilterComponent
              productList={productList}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              brandFilter={brandFilter}
              setBrandFilter={setBrandFilter}
              ratingFilter={ratingFilter}
              setRatingFilter={setRatingFilter}
              inStockOnly={inStockOnly}
              setInStockOnly={setInStockOnly}
            />
          </div>
          <div className="col-lg-4">
            <SortComponent
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>
        </div>

        {/* Cart */}
        <div className="mb-5">
          <CartComponent
            cart={cart}
            removeFromCart={removeFromCart}
            updateQty={updateQty}
          />
        </div>

        {/* Product Grid */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {sortedProducts.length === 0 ? (
            <div className="text-center text-muted fs-5 my-5">
              No products found.
            </div>
          ) : (
            sortedProducts.map((val) => (
              <div className="col" key={val.id}>
                <ProductCard
                  product={val}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  addToCart={addToCart}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* 🔻 Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container text-center">
          <p className="mb-1">&copy; {new Date().getFullYear()} Product Store. All rights reserved.</p>
          <small>Made with ❤️ by Bhargav Bhimani</small>
        </div>
      </footer>
    </>
  );
};

export default Client;
