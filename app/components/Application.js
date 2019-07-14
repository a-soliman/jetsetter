import React, { Component } from 'react';

class Application extends Component {
  state = {
    items: [{ value: 'Pants', id: Date.now(), packed: false }]
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Hello World!</h1>
        <button className="full-width">This button does not do anything.</button>
      </div>
    );
  }
};

export default Application;