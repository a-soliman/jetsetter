import React from 'react';

const Item = ({ packed, id, value, onCheckOff }) => {
  function handleOnCheckOff() {
    onCheckOff(id);
  }

  return (
    <article className="item">
      <label>
        <input type="checkbox" checked={packed} onChange={handleOnCheckOff} />{value}
      </label>
    </article>
  );
};

export default Item;