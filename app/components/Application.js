import React, { useState, useEffect } from 'react';
import Items from './Items';
import NewItem from './NewItem';

const Application = ({ database }) => {
  const [items, setItems] = useState([
    { value: 'Pants', id: Date.now(), packed: false }
  ]);

  useEffect(() => {
    fetchItems();
  })

  const fetchItems = async () => {
    try {
      const result = await database('items').select();
      setItems(result);
    }
    catch(e) {
      console.error(e);
    }
  };

  const filterItems = () => {
    const packed = items.filter(item => item.packed);
    const unPacked = items.filter(item => !item.packed);
    return { packed, unPacked };
  };

  const addItem = async (item) => {
    try {
      await database('items').insert(item);
      await fetchItems();
    }
    catch(e) {
      console.error(e);
    }
  };

  const togglePacked = async (id) => {
    const item = items.find(item => item.id === id);

    try {
      await database('items').where('id', '=', id).update({ packed: !item.packed});
      await fetchItems();
    }
    catch(e) {
      console.error(e);
    }
  };

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
      <NewItem onSubmit={addItem} />
      <Items title="Unpacked Items" items={unPacked} onCheckOff={togglePacked} />
      <Items title="Packed Items" items={packed} onCheckOff={togglePacked} />
      <button className="full-width" onClick={markAllAsUnPacked}>Mark All Unpacked</button>
    </div>
  );
};

export default Application;
