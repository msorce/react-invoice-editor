import React, { Component } from 'react';
import { connect } from "react-redux";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false};
  }

  render() {
    if(this.state.isEditing) {
      return (
        <li>
          <form onSubmit={(e) => { e.preventDefault();
            this.props.editItem({
              id:this.props.id,
              name: this.refs.name.value,
              qty: parseInt( this.refs.qty.value, 10 ) || 0,
              price: parseFloat( this.refs.price.value ) || 0,
              total:this.refs.price.value * this.refs.qty.value
            });
            this.toggleEditing();
          }}>
            <input
              defaultValue={this.props.name}
              ref="name"
              type="text"/>
            <input
              defaultValue={this.props.qty}
              ref="qty"
              type="number"
              step="1"
              min="0"/>
            $<input
              defaultValue={this.props.price}
              ref="price"
              type="number"
              step="any"
              min="0"/>
            <button className="save-btn">save</button>
            <button className="cancel-btn" onClick={this.toggleEditing.bind(this)}>cancel</button>
          </form>
        </li>
      );
    } else {
      return(
        <li onClick={this.toggleEditing.bind(this)}>
          <div className="item-name">
            {this.props.name}{' '}
          </div>
          <div className="item-quantities">
            <span>{this.props.qty}{' '}</span>
            <span>${this.props.price.toFixed(2)}{' '}</span>
            <span>${this.props.total.toFixed(2)}{' '}</span>
          </div>
          <button className="del-btn" onClick={(e) => { e.preventDefault();
          this.props.removeItem(this.props);
          }}>x</button>
        </li>
      );
    }
  }
  toggleEditing(){
   this.setState({isEditing: !this.state.isEditing});
  }
}

// we need this in order to use the store
// which properties we want in which component
// we can hook up any component to redux like this
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};
// we can now dispatch actions here
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => {
      dispatch({
        type: "REMOVE_ITEM",
        payload: item
      });
    },
    editItem: (item) => {
      dispatch({
        type: "EDIT_ITEM",
        payload: item
      });
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);