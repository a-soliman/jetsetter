import React from 'react';

const Item = ({ packed, id, value, onCheckOff, onDelete }) => {
  function handleOnCheckOff() {
    onCheckOff(id);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <article className="item">
      <label>
        <input type="checkbox" checked={packed} onChange={handleOnCheckOff} />{value}
      </label>
      <button className="delete" onClick={handleDelete}>&times;</button>
    </article>
  );
};

export default Item;