import React, { useState } from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";

const Form = ({
  handleSubmit,
  handleChange,
  product,
  options,
  imageRef,
  error,
}) => {
  return (
    <>
      <div className="wrapper">
        {/* Sidebar */}
        <Aside />
        {/* End Sidebar */}
        <div className="main-panel">
          <div className="main-header">
            <div className="main-header-logo">
              {/* Logo Header */}
              <div className="logo-header" data-background-color="dark">
                <a href="../index.html" className="logo">
                  <img
                    src="../assets/img/kaiadmin/logo_light.svg"
                    alt="navbar brand"
                    className="navbar-brand"
                  />
                </a>
                <div className="nav-toggle">
                  <button className="btn btn-toggle toggle-sidebar">
                    <i className="gg-menu-right" />
                  </button>
                  <button className="btn btn-toggle sidenav-toggler">
                    <i className="gg-menu-left" />
                  </button>
                </div>
                <button className="topbar-toggler more">
                  <i className="gg-more-vertical-alt" />
                </button>
              </div>
              {/* End Logo Header */}
            </div>
            {/* Navbar Header */}
            <Header />
            {/* End Navbar */}
          </div>
          <div className="container">
            <div className="page-inner">
              <div className="page-header">
                <h3 className="fw-bold mb-3">Forms</h3>
                <ul className="breadcrumbs mb-3">
                  <li className="nav-home">
                    <a href="#">
                      <i className="icon-home" />
                    </a>
                  </li>
                  <li className="separator">
                    <i className="icon-arrow-right" />
                  </li>
                  <li className="nav-item">
                    <a href="#">Forms</a>
                  </li>
                  <li className="separator">
                    <i className="icon-arrow-right" />
                  </li>
                  <li className="nav-item">
                    <a href="#">Basic Form</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-md-12 ">
                  <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="card">
                      <div className="card-header">
                        <div className="card-title">Form Elements</div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 col-lg-4">
                            {/* Product Name */}
                            <div className="form-group">
                              <label htmlFor="product-name">Product Name</label>
                              <input
                                type="text"
                                onChange={handleChange}
                                value={product.pName || ""}
                                className="form-control"
                                id="pName"
                                name="pName"
                                placeholder="Enter Product Name"
                              />
                              {error.pName && (
                                <span className="text-danger">
                                  {error.pName}
                                </span>
                              )}
                            </div>

                            {/* Product Stock */}
                            <div className="form-group">
                              <label htmlFor="stock">Product Stock</label>
                              <input
                                type="number"
                                onChange={handleChange}
                                value={product.stock || ""}
                                className="form-control"
                                id="stock"
                                name="stock"
                                placeholder="Enter Product stock"
                              />
                              {error.stock && (
                                <span className="text-danger">
                                  {error.stock}
                                </span>
                              )}
                            </div>

                            {/* Product Price */}
                            <div className="form-group">
                              <label htmlFor="product-price">
                                Product Price
                              </label>
                              <input
                                type="text"
                                onChange={handleChange}
                                value={product.price || ""}
                                className="form-control"
                                id="price"
                                name="price"
                                placeholder="Enter Product price"
                              />
                              {error.price && (
                                <span className="text-danger">
                                  {error.price}
                                </span>
                              )}
                            </div>

                            {/* Image */}
                            <div className="form-group">
                              <label>Image</label>
                              <input
                                type="file"
                                onChange={handleChange || ""}
                                ref={imageRef}
                                className="form-control"
                                id="image"
                                name="image"
                              />
                              {error.image && (
                                <span className="text-danger">
                                  {error.image}
                                </span>
                              )}
                            </div>

                            {/* Content */}
                            <div className="form-group">
                              <label htmlFor="content">Content</label>
                              <textarea
                                className="form-control"
                                onChange={handleChange}
                                value={product.content || ""}
                                id="content"
                                name="content"
                                placeholder="Enter Product content"
                              />
                              {error.content && (
                                <span className="text-danger">
                                  {error.content}
                                </span>
                              )}
                            </div>

                            {/* ⭐️ New Fields */}
                            {/* Rating */}
                            <div className="form-group">
                              <label htmlFor="rating">Rating (out of 5)</label>
                              <input
                                type="number"
                                onChange={handleChange}
                                value={product.rating || ""}
                                className="form-control"
                                id="rating"
                                name="rating"
                                min="1"
                                max="5"
                                placeholder="Enter rating"
                              />
                              {error.rating && (
                                <span className="text-danger">
                                  {error.rating}
                                </span>
                              )}
                            </div>

                            {/* Category */}
                            <div className="form-group">
                              <label htmlFor="category">Category</label>
                              <input
                                type="text"
                                onChange={handleChange}
                                value={product.category || ""}
                                className="form-control"
                                id="category"
                                name="category"
                                placeholder="Enter category"
                              />
                              {error.category && (
                                <span className="text-danger">
                                  {error.category}
                                </span>
                              )}
                            </div>

                            {/* Brand */}
                            <div className="form-group">
                              <label htmlFor="brand">Brand</label>
                              <input
                                type="text"
                                onChange={handleChange}
                                value={product.brand || ""}
                                className="form-control"
                                id="brand"
                                name="brand"
                                placeholder="Enter brand"
                              />
                              {error.brand && (
                                <span className="text-danger">
                                  {error.brand}
                                </span>
                              )}
                            </div>

                            {/* Checkbox Options */}
                            <div className="form-group">
                              <label>Product Options</label> <br />
                              {error.options && (
                                <span className="text-danger">
                                  {error.options}
                                </span>
                              )}
                              <div className="form-check">
                                <input
                                  onChange={handleChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  id="featured"
                                  name="options"
                                  value="surat"
                                  checked={options.includes("surat")}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="featured"
                                >
                                  Surat
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  onChange={handleChange}
                                  type="checkbox"
                                  id="new-arrival"
                                  name="options"
                                  value="rajkot"
                                  checked={options.includes("rajkot")}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="new-arrival"
                                >
                                  Rajkot
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={handleChange}
                                  id="on-sale"
                                  name="options"
                                  value="navsari"
                                  checked={options.includes("navsari")}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="on-sale"
                                >
                                  Navsari
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Form Footer */}
                      <div className="card-action">
                        <button className="btn btn-success">Submit</button>
                        <button className="btn btn-danger">Cancel</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid d-flex justify-content-between">
              <nav className="pull-left">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="http://www.themekita.com">
                      ThemeKita
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {" "}
                      Help{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {" "}
                      Licenses{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="copyright">
                2025, made with <i className="fa fa-heart heart text-danger" />{" "}
                by
                <a href="https://github.com/Bhargavbhimani229">Bhargav</a>
              </div>
              <div>
                Distributed by
                <a target="_blank" href="https://themewagon.com/">
                  ThemeWagon
                </a>
                .
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Form;
