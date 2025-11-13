import './Shop.css';

function Buttons({ filteredItem, totalItems, categories }) {
  return (
    <div className="cont">
      {/* Botón All */}
      <button className="change" onClick={() => filteredItem("all")}>
        All
      </button>

      {/* Botones dinámicos según categorías */}
      {categories.map((category, index) => (
        <button
          key={index}
          className="change"
          onClick={() => filteredItem(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}

      {/* Icono de carrito */}
      <div className="cart-icon">
        <span>🛒</span>
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </div>
    </div>
  );
}

export default Buttons;
