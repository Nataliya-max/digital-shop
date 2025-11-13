
import ProductCard from './ProductCard';
import './Shop.css';

export default function ShopItem({ anyItem }) {

  return (
    <div className="products">
      {anyItem.map((itemData, idx) =>
        itemData && itemData.id ? (
          <ProductCard key={itemData.id} itemData={itemData} />
        ) : null 
      )}
    </div>
  );
}
