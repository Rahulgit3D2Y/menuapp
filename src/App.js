import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Dynamically compute unique categories
const categories = [...new Set(items.map(item => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      setMenuItems(items.filter((item) => item.category === category));
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* Pass dynamically computed categories to Categories component */}
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
