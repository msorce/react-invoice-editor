import React, { Component } from 'react';

class Charges extends Component {
  render() {
    console.log(this.props)
    if(this.props.charges.subtotal) {
      return (
        <div>
        <b>Charges:</b> <br/>
        subtotal: ${this.props.charges.subtotal.toFixed(2)} <br/>
        tax (5%): ${this.props.charges.tax.toFixed(2)} <br/>
        total: ${this.props.charges.total.toFixed(2)} <br/>
        </div>
      );
    } else {
      return (
        <div>
          <b>Charges:</b> <br/>
          subtotal: $0.00 <br/>
          tax (5%): $0.00 <br/>
          total: $0.00 <br/>
        </div>

      );
    }

  }
}

// const mapStateToProps = (state) => {
//   return {
//     invoice: state.invoice
//   };
// };

export default Charges;
