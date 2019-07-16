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

  const markAllAsUnPacked = async () => {
    try {
      await database('items').select().update({ packed: false });
      await fetchItems();
    }
    catch(e) {
      console.error(e);
    }
  };

  const deleteItem = async (id) => {
    try {
      await database('items').where('id', id).delete();
      await fetchItems();
    }
    catch(e) {
      console.error(e);
    }
  };

  const deleteUnPackedItems = async () => {
    try {
      await database('items').where('packed', false).delete();
      await fetchItems();
    }
    catch(e) {
      console.error(e);
    }
  };

  const { packed, unPacked } = filterItems();

  return (
    <div className="application">
      <NewItem onSubmit={addItem} />
      <Items title="Unpacked Items" items={unPacked} onCheckOff={togglePacked} onDelete={deleteItem} />
      <Items title="Packed Items" items={packed} onCheckOff={togglePacked} onDelete={deleteItem} />
      <button className="full-width" onClick={markAllAsUnPacked}>Mark All Unpacked</button>
      <button className="button full-width-secondary" onClick={deleteUnPackedItems}>Remove Unpacked Items</button>
    </div>
  );
};

export default Application;
