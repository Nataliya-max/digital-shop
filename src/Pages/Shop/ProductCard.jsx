import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';
import ChangeQuantity from '../Cart/ChangeQuantity';
import './Shop.css';

export default function ProductCard({ itemData }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();


  return (
    <div className="product-card">
      <img 
        src={itemData.image} 
        alt={itemData.title} 
        className="product-image"
      />

      <div className="product-info">
        <h3 className="product-title">{itemData.title}</h3>
        <p className="product-price">€ {itemData.price}</p>

        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />

        <button className="add-button" onClick={() => dispatch(addItemToCart( {item: itemData, quantity}))}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
