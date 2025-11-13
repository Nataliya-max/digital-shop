import { useState } from 'react';
import './Shop.css';
import ShopItem from './ShopItem';
import { shopListdata } from './shopListdata';
import Buttons from './Buttons';

function Shop() {
  const [item, setItem] = useState(shopListdata);

  // Extraer categorías únicas automáticamente
  const categories = [...new Set(shopListdata.map(el => el.searchTerm))];

  const chosenItem = (searchTerm) => {
    if (searchTerm.toLowerCase() === 'all') {
      setItem(shopListdata);
    } else {
      const newItem = shopListdata.filter(element => element.searchTerm === searchTerm);
      setItem(newItem);
    }
  };

  return (
    <div className="shop-page">
      <Buttons filteredItem={chosenItem} totalItems={item.length} categories={categories} />
      <ShopItem anyItem={item} />
    </div>
  );
}

export default Shop;

