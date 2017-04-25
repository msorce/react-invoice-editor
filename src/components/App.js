import React, { Component } from 'react';
import { connect } from "react-redux";
import Items from "./Items";
import AddItem from "./AddItem";
import Charges from "./Charges";

class App extends Component {
  render() {
    return (
      <div>
        <Items
          items={this.props.items}
          />
        <AddItem addItem={ (test) => this.props.addItem(test) }/>
        <hr/>
        <Charges charges={this.props.charges}/>
      </div>
    );
  }
}

// we need this in order to use the store
// which properties we want in which component
// we can hook up any component to redux like this
const mapStateToProps = (state) => {
  // console.log(state);
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

