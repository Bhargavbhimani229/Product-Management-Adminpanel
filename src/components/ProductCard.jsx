import React from "react";

const ProductCard = ({ product, handleEdit, handleDelete, addToCart }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image?.url}
        className="card-img-top"
        alt={product.pName}
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.pName}</h5>
        <p className="card-text mb-1">
          <strong>Price:</strong> {product.price}
        </p>
        <p className="card-text mb-1">
          <strong>Stock:</strong> {product.stock}
        </p>
        <p className="card-text mb-1">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="card-text mb-1">
          <strong>Brand:</strong> {product.brand}
        </p>
        <p className="card-text mb-1">
          <strong>Godown:</strong> {product.options?.join(", ")}
        </p>
        <p className="card-text">
          <strong>Content:</strong> {product.content}
        </p>
        <div>
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
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          className="btn btn-success btn-sm"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
