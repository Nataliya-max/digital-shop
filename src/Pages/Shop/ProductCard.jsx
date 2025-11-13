import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

export default function ProductCard({ itemData }) {

  const [isExpanded, setIsExpanded] = useState(false);
  const { title, image, description, price } = itemData;
  
  if (!itemData || typeof itemData !== 'object' || Array.isArray(itemData)) {
    console.error('Invalid itemData:', itemData);
    return null;
  }
   
  
  const shortDesc =
    description.length > 26
      ? description.slice(0, 26).trimEnd().split(' ').slice(0, -1).join(' ') + '…'
      : description;

  return (
    <div className="product-card">
      <Link to={`/shop/${title}`} className="product-link">
        <img src={image} alt={title} width="250" height="200" />
      </Link>
      <div className="product-info">
        <h3>{isExpanded ? description : shortDesc}</h3>
        {description.length > 26 && (
          <button
            className="showMore-button"
            onClick={() => setIsExpanded(prev => !prev)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        )}
        <h4 className="tag-button">€ {price}</h4>
        <button className="add-button">Add</button>
      </div>
    </div>
  );
}
