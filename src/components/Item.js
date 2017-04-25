import React, { Component } from 'react';
import { connect } from "react-redux";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false};
  }


  render() {
    // const { id } = this.props;
    console.log(this.props);

    return(
      <li>
        <div className="item-name">
          {this.props.name}{' '}
        </div>
        <div className="item-quantities">
          {this.props.qty}{' '}
          ${this.props.price.toFixed(2)}{' '}
          ${this.props.total.toFixed(2)}{' '}
        </div>
        <button onClick={(e) => { e.preventDefault();
        this.props.removeItem(this.props);
        }}>x</button>
      </li>
    );
  }
}

// we need this in order to use the store
// which properties we want in which component
// we can hook up any component to redux like this
const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.items
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => {
      dispatch({
        type: "REMOVE_ITEM",
        payload: item
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);