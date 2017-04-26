import React, { Component } from 'react';
let uniqueIdentifier = 0;
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>Item</div>
        <div>
          <span>Qty</span>
          <span>Price</span>
          <span>Total</span>
        </div>
      </div>
    );
  }
}

export default Header;
