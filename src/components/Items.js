import React, { Component } from 'react';
class Items extends Component {
  render() {
    // console.log(this.props.items.lengh > 1)
      if( this.props.items.length ) {
        return (
            <div>{
              this.props.items.map(i =>
                <div key={i.id}>{i.name}</div>)
            }</div>
        );
      } else {
        return (
          <div>there are no items</div>
        );
      }
  }
}

// const mapStateToProps = (state) => {
//   return {
//     invoice: state.invoice
//   };
// };

export default Items;
