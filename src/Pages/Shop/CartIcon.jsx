import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function CartIcon() {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-icon-wrapper">
      <Link to="/cart" className="cart-link">
        🛒
        {totalItems === 0 ? (
          <span className="cart-empty-text">Carrito está vacío</span>
        ) : (
          <span className="cart-summary">
            {totalItems} item{totalItems > 1 ? 's' : ''}: {cartItems.map(i => i.item.title).join(', ')}
          </span>
        )}
      </Link>
    </div>
  );
}
