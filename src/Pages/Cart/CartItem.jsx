import React from 'react';
import { useDispatch } from 'react-redux';
import './Cart.css';
import { removeItemFromCart } from  '../../redux/cartSlice';

export default function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  

  return (
    <div className="cart-item">
      <img src={cartItem.item.image} alt={cartItem.item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h4>{cartItem.item.title}</h4>
        <p>{cartItem.item.description}</p>
        <p>Cantidad: {cartItem.quantity}</p>
        <p>Total: € {cartItem.quantity * cartItem.item.price}</p>
      </div>
      <button className="remove-button" onClick={() => dispatch(removeItemFromCart({ itemId: cartItem.item.id }))}>❌</button>
    </div>
  );
}
