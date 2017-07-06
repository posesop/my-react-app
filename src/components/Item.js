import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Item;
