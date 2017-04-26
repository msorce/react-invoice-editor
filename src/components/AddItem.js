import React, { Component } from 'react';

let uniqueIdentifier = 0;
class AddItem extends Component {
  render() {
    return (
      <form className="add-item" onSubmit={(e) => { e.preventDefault()
        if(this.refs.name.value &&
           this.refs.qty.value&&
           this.refs.price.value)
        {
          this.props.addItem({
            id:++uniqueIdentifier,
            name: this.refs.name.value,
            qty: parseInt( this.refs.qty.value, 10 ) || 0,
            price: parseFloat( this.refs.price.value ) || 0,
            total:this.refs.price.value * this.refs.qty.value
          })
          this.refs.name.value = '';
          this.refs.qty.value = 1;
          this.refs.price.value = 0.01;
          this.refs.name.focus();
        }}}>

        <input
          placeholder="New Item"
          ref="name"
          type="text"/>
        <input
          ref="qty"
          type="number"
          step="1"
          defaultValue={1}
          min="0"/>
        <input
          ref="price"
          type="number"
          step="any"
          defaultValue={0.01}
          min="0"/>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default AddItem;
