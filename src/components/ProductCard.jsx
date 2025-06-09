import React from "react";

const ProductCard = ({ product, handleEdit, handleDelete, addToCart }) => {
  return (
    <div className="card h-100 shadow rounded-4 border-0">
      <img
        src={product.image?.url}
        className="card-img-top p-3"
        alt={product.pName}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h2 className="card-title fw-semibold text-dark">{product.pName}</h2>

        <ul className="list-unstyled small text-secondary mb-3">
          <li style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#333" }}>
            Price:{" "}
            <span style={{ fontWeight: "normal", color: "#555" }}>
              ₹{product.price}
            </span>
          </li>

          <li>
            <strong>Stock:</strong> {product.stock}
          </li>
          <li>
            <strong>Brand:</strong> {product.brand}
          </li>
          <li>
            <strong>Content:</strong> {product.content}
          </li>
        </ul>

        <div className="mb-3">
          <strong>Rating:</strong>{" "}
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              style={{
                color: i < product.rating ? "#f1c40f" : "#ccc",
                fontSize: "1.2rem",
              }}
            >
              ★
            </span>
          ))}
        </div>

        <div className="mt-auto d-flex justify-content-between">
          <button
            className="btn btn-success btn-sm"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
