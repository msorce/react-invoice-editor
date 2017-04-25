import React, { Component } from 'react';
import { connect } from "react-redux";
import Items from "./Items";
import AddItem from "./AddItem";
import Charges from "./Charges";

class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        <Items items={this.props.items}/>
        <AddItem />
        <Charges charges={this.props.charges}/>
      </div>
    );
  }
}
// we need this in order to use the store
// which properties we want in which component
const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.items,
    charges: state.charges
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch({
        type: "ADD_ITEM",
        payload: item
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

