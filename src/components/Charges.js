import React, { Component } from 'react';

class Charges extends Component {
  render() {
      return (
        <div className="charges">
          <span>Subtotal: &nbsp;</span>
          ${
            this.props.charges.subtotal ? this.props.charges.subtotal.toFixed(2) : '0.00'
          }
          <br/>
          <span>Tax (5%): &nbsp;</span>
          ${
            this.props.charges.tax ? this.props.charges.tax.toFixed(2) : '0.00'
          }
          <br/>
          <hr/>
          <span>Total: &nbsp;</span>
          ${
            this.props.charges.total ? this.props.charges.total.toFixed(2) : '0.00'
          }
          <br/>
        </div>
      );
  }
}

export default Charges;
