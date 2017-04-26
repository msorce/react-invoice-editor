import React, { Component } from 'react';
import Item from './Item.js'

class Items extends Component {
  render() {
    if(!!this.props.items.length) {
      return (
        <ul className="items-list">
          {
            this.props.items.map( (i, index) => <Item key={i.id} {...i}/> )
          }
        </ul>
      );
    } else {
      return<div className="no-items">there are no items</div>;
    }
  }
}

export default Items;
