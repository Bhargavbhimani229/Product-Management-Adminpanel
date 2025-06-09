import React from "react";

const CartComponent = ({ cart, removeFromCart, updateQty }) => {
  const total = cart.reduce(
    (acc, item) => acc + item.qty * parseFloat(item.price || 0),
    0
  );

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h5>🛒 Cart ({cart.length} items)</h5>
      </div>
      <ul className="list-group list-group-flush">
        {cart.length === 0 && (
          <li className="list-group-item text-center text-muted">
            Your cart is empty.
          </li>
        )}
        {cart.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}
          >
            <div>
              <strong>{item.pName}</strong>
              <br />
              Price: {item.price}
            </div>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => updateQty(item.id, item.qty - 1)}
                disabled={item.qty <= 1}
              >
                −
              </button>
              <span>{item.qty}</span>
              <button
                className="btn btn-sm btn-outline-secondary ms-2"
                onClick={() => updateQty(item.id, item.qty + 1)}
              >
                +
              </button>

              <button
                className="btn btn-sm btn-danger ms-3"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="card-footer text-end fw-bold">
        Total: ₹{total.toFixed(2)}
      </div>
    </div>
  );
};

export default CartComponent;
