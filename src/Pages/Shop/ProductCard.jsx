import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';
import ChangeQuantity from '../Cart/ChangeQuantity';
import './Shop.css';

export default function ProductCard({ itemData }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItemToCart({ item: itemData, quantity }));
  };

  return (
    <div className="product-card">
      {/* Imagen del producto */}
      <img 
        src={itemData.image} 
        alt={itemData.title} 
        className="product-image"
      />

      {/* Contenido de la tarjeta */}
      <div className="product-info">
        <h3 className="product-title">{itemData.title}</h3>
        <p className="product-price">€ {itemData.price}</p>

        {/* Selector de cantidad */}
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />

        {/* Botón añadir al carrito */}
        <button className="add-button" onClick={handleAdd}>
          Añadir
        </button>
      </div>
    </div>
  );
}
