import React, { useState } from 'react';

const Application = () => {
  const [items, setItems] = useState([
    { value: 'Pants', id: Date.now(), packed: false }
  ]);

  const filterItems = () => {
    const packed = items.map(item => item.packed);
    const unPacked = items.map(item => !item.packed);
    return { packed, unPacked };
  };

  const addItem = item => setItems([...items, item]);

  const markAsPacked = item => {};

  const markAllAsUnPacked = () => {
    const updatedItems = [...items].map(item => {
      item.packed = false;
      return item;
    });
    setItems(updatedItems);
  };

  const { packed, unPacked } = filterItems();

  return (
    <div className="application">
      {/* TO BE IMPLEMENTED: <NewItem /> */}
      {/* TO BE IMPLEMENTED: <Items title="Unpacked Items" /> */}
      {/* TO BE IMPLEMENTED: <Items title="Packed Items" /> */}
      <button className="full-width" onClick={markAllAsUnPacked}>Mark All Unpacked</button>
    </div>
  );
};

export default Application;
