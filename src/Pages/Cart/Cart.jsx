import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);

  if (!cartItems || cartItems.length === 0) {
    return <div className="cart-empty">El carrito está vacío 🛒</div>;
  }

  const totalGeneral = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.item.price,
    0
  );

  return (
    <div className="cart-page">
      <h2>Mi Carrito</h2>
      <div className="cart-list">
        {cartItems.map((item, index) => (
          <CartItem key={index} cartItem={item} />
        ))}
      </div>
      <div className="cart-total">
        <strong>Total: € {totalGeneral}</strong>
      </div>
    </div>
  );
}
