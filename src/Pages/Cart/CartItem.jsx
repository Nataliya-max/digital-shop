import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../redux/cartSlice';
import './Cart.css';

export default function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItemFromCart(cartItem.item.title));
  };

  return (
    <div className="cart-item">
      <img src={cartItem.item.image} alt={cartItem.item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h4>{cartItem.item.title}</h4>
        <p>{cartItem.item.description}</p>
        <p>Cantidad: {cartItem.quantity}</p>
        <p>Total: € {cartItem.quantity * cartItem.item.price}</p>
      </div>
      <button className="remove-button" onClick={handleRemove}>❌</button>
    </div>
  );
}
