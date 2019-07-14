import React from 'react';
import { render } from 'react-dom';

const Application = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <button className="full-width">This button does not do anything.</button>
    </div>
  )
};
render(<Application />, document.getElementById('application'));
