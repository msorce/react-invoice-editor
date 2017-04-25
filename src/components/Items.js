import React, { Component } from 'react';
import Item from './Item.js'
class Items extends Component {
  render() {
      if( this.props.items.length ) {
        return (
          <ul>{
            this.props.items.map((i, index) => <Item key={i.id} {...i}/>)
          }</ul>
        );
      } else {
        return (
          <div>there are no items</div>
        );
      }
  }
}

export default Items;
