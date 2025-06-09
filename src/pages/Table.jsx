import React from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";

const Table = ({ productList, handleDelete, handleEdit }) => {
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
                    height={20}
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
                <h3 className="fw-bold mb-3">DataTables.Net</h3>
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
                    <a href="#">Tables</a>
                  </li>
                  <li className="separator">
                    <i className="icon-arrow-right" />
                  </li>
                  <li className="nav-item">
                    <a href="#">Datatables</a>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex align-items-center">
                        <h4 className="card-title">Add Row</h4>
                        <button
                          className="btn btn-primary btn-round ms-auto"
                          data-bs-toggle="modal"
                          data-bs-target="#addRowModal"
                        >
                          <i className="fa fa-plus" />
                          Add Row
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="add-row"
                          className="display table table-striped table-hover"
                        >
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Product Name</th>
                              <th>Product Stock</th>
                              <th>Product Price</th>
                              <th>Image</th>
                              <th>Content</th>
                              <th>Product Godown</th>
                              <th>Category</th>
                              <th>Brand</th>
                              <th>Rating</th>
                              <th style={{ width: "10%" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {productList.map((val, idx) => (
                              <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{val.pName}</td>
                                <td>{val.stock}</td>
                                <td>{val.price}</td>
                                <td>
                                  <img
                                    src={val.image?.url}
                                    alt={val.pName}

                                    style={{
                                      width: "80px",
                                    }}
                                  />
                                </td>
                                <td>{val.content}</td>
                                <td>{val.options?.join(", ")}</td>
                                <td>{val.category}</td>
                                <td>{val.brand}</td>
                                <td>
                                  {/* ⭐ Display star rating */}
                                  {Array.from({ length: 5 }, (_, i) => (
                                    <span
                                      key={i}
                                      style={{
                                        color:
                                          i < val.rating ? "#f1c40f" : "#ccc",
                                      }}
                                    >
                                      ★
                                    </span>
                                  ))}
                                </td>
                                <td>
                                  <div className="form-button-action">
                                    <button
                                      type="button"
                                      data-bs-toggle="tooltip"
                                      title
                                      className="btn btn-link btn-primary btn-lg"
                                      data-original-title="Edit Task"
                                      onClick={() => handleEdit(val.id)}
                                    >
                                      <i className="fa fa-edit" />
                                    </button>
                                    <button
                                      type="button"
                                      data-bs-toggle="tooltip"
                                      title
                                      className="btn btn-link btn-danger"
                                      data-original-title="Remove"
                                      onClick={() => handleDelete(val.id)}
                                    >
                                      <i className="fa fa-times" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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

export default Table;
