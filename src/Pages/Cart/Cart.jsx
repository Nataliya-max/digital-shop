import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';
import { getCartItems } from '../../redux/cartSlice';

export default function Cart() {
  const cartItems = useSelector(getCartItems);

  if (!cartItems || cartItems.length === 0) {
    return <div className="cart-empty">El carrito está vacío 🛒</div>;
  }

  // Calculamos total correctamente
  const totalGeneral = cartItems.reduce(
    (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Mi Carrito</h2>

      <div className="cart-list">
        {cartItems.map(cartItem => (
          <CartItem 
            key={cartItem.item.id}
            cartItem={cartItem}
          />
        ))}
      </div>

      <div className="cart-total">
        <strong>Total: € {totalGeneral.toFixed(2)}</strong>
      </div>
    </div>
  );
}
