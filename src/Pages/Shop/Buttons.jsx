import Cart from '../Cart/Cart';
import CartItem from '../Cart/CartItem';
import './Shop.css';

function Buttons({ filteredItem, totalItems, categories }) {
  return (
    <div className="cont">
      {/* Botón All */}
      <button className="change" onClick={() => filteredItem("all")}>
        Todo
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
      </div>
    
  );
}

export default Buttons;




