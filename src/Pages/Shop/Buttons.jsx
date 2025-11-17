import './Shop.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Buttons({ filteredItem, categories }) {

  // Obtener items
  const cartItems = useSelector((state) => state.cart?.cartItems || []);

  // Sumar todas las cantidades
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = useNavigate();

  return (
    <div className="cont">
      <button className="change" onClick={() => filteredItem("all")}>
        Todo
      </button>

      {categories?.map((category, index) => (
        <button
          key={index}
          className="change"
          onClick={() => filteredItem(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}

      {/* Botón carrito con burbuja */}
      <button className="cart-btn" onClick={() => navigate("/cart")}>
        <span className="cart-icon">🛍️</span>

        {/* Burbuja flotante */}
        <span className="cart-bubble">
          {totalQuantity === 0 ? "0" : totalQuantity}
        </span>
      </button>
    </div>
  );
}

export default Buttons;





