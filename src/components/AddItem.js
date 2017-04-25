import React, { Component } from 'react';
// import { connect } from "react-redux";
let uniqueIdentifier = 0;
class AddItem extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e) => { e.preventDefault()
            this.props.addItem({
              id:uniqueIdentifier++,
              name: this.refs.name.value,
              qty: parseInt( this.refs.qty.value, 10 ),
              price: parseFloat( this.refs.price.value ),
              total:this.refs.price.value * this.refs.qty.value
            })
          }}>

          <b> Add item </b> <br/>

          {' '} name: <input
          ref="name"
          type="text"
          style={{width:'30%'}} />

          {' '} qty: <input
          ref="qty"
          type="number"
          step="1"
          min="0"
          style={{width:'10%'}} />

          {' '} price: <input
          ref="price"
          type="number"
          step="any"
          min="0"
          style={{width:'20%'}} />

          <button type="submit">+</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     invoice: state.invoice
//   };
// };

export default AddItem;
