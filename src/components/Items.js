import React, { Component } from 'react';
console.log()
class Items extends Component {
  render() {
    console.log(this.props.items[0])
    return (
      <div>successfully showing an item, heh: {this.props.items[0].name}</div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     invoice: state.invoice
//   };
// };

export default Items;
