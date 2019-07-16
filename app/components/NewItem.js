import React, { useState } from 'react';

const NewItem = ({onSubmit}) => {
  const [value, setValue ] = useState('');

  const handleChange = evt => {
    setValue(evt.target.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    if (value === '') return;
    const newItem = { value, packed:false };
    onSubmit(newItem);
    setValue('');
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <input type="text" value={value} className="NewItem-input" onChange={handleChange} />
      <input type="submit" className="NewItem-submit button" disabled={!value.length} />
    </form>
  );
};

export default NewItem;