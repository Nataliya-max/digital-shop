import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { motion } from "framer-motion";
import "./Shop.css";

function truncateText(text, maxLength = 30) {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  let trimmed = text.slice(0, maxLength);
  if (text[maxLength] !== " ") {
    const lastSpace = trimmed.lastIndexOf(" ");
    if (lastSpace !== -1) trimmed = trimmed.slice(0, lastSpace);
  }
  return trimmed + "…";
}

export default function ProductCard({ itemData }) {
  const [quantity, setQuantity] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  const toggleMore = () => setShowMore(!showMore);

  const handleAddToCart = () => {
    dispatch(addItemToCart({ item: itemData, quantity }));
    setAdded(true);
    setTimeout(() => setAdded(false), 800);
  };

  const shortDescription = truncateText(itemData.description, 30);

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={itemData.image} alt={itemData.title} className="product-image" />

      <div className="product-info">
        <h3 className="product-title">{itemData.title}</h3>
        <p className="product-price">€ {itemData.price}</p>

        <p className="product-description">
          {showMore ? itemData.description : shortDescription}
        </p>

        {itemData.description.length > 30 && (
          <button className="showMore-button" onClick={toggleMore}>
            {showMore ? "Leer menos" : "Leer más"}
          </button>
        )}

        <div className="product-actions">
          <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />

          <motion.button
            className="add-button"
            onClick={handleAddToCart}
            animate={added ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            Añadir al carrito
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
