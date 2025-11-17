import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import { motion } from "framer-motion";
import "./Cart.css";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const totalPrice = cartItems.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );

  const handleApplyCoupon = () => {
    if (coupon.toUpperCase() === "DESCUENTO10") {
      setDiscount(0.1);
      alert("Cupón aplicado: 10% de descuento");
    } else {
      setDiscount(0);
      alert("Cupón inválido");
    }
  };

  const discountedPrice = totalPrice * (1 - discount);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Tu Carrito</h1>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío.</p>
      ) : (
        <>
          {/* Sección de cupones */}
          <div className="coupon-section">
            <input
              type="text"
              placeholder="Introduce cupón"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button onClick={handleApplyCoupon}>Aplicar</button>
          </div>

          {/* Lista de productos */}
          <div className="cart-list">
            {cartItems.map((cartItem) => (
              <motion.div
                className="cart-item"
                key={cartItem.item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={cartItem.item.image}
                  alt={cartItem.item.title}
                  className="cart-item-img"
                />

                <div className="cart-item-info">
                  <h3>{cartItem.item.title}</h3>
                  <p>Cantidad: {cartItem.quantity}</p>
                  <p>Precio: € {cartItem.item.price}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(removeItemFromCart({ itemId: cartItem.item.id }))
                  }
                >
                  ❌
                </button>
              </motion.div>
            ))}
          </div>

          {/* Total y descuento */}
          <div className="cart-total">
            <p>
              Total: <span>€ {discountedPrice.toFixed(2)}</span>
            </p>
            {discount > 0 && (
              <p className="cart-discount">
                Descuento aplicado: {discount * 100}%
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
