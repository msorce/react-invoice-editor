import React, { Component } from 'react';

const chargeStyle = {
  textAlign: 'right',
  float:'right',
  display:'inline-block'
}

class Charges extends Component {
  render() {
      return (
        <div style={chargeStyle}>
          subtotal: $
          {
            this.props.charges.subtotal ? this.props.charges.subtotal.toFixed(2) : '0.00'
          }
          <br/>
          tax (5%): ${
            this.props.charges.tax ? this.props.charges.tax.toFixed(2) : '0.00'
          }
          <br/>
          total: $
          {
            this.props.charges.total ? this.props.charges.total.toFixed(2) : '0.00'
          }
          <br/>
        </div>
      );
  }
}

export default Charges;
