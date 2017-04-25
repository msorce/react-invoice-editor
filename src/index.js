import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import './index.css';

const initialState = {
  items:[],
  charges: {
    subtotal: null,
    tax: null,
    total: null
  }
};

// This is a reducer, a reducer creates a new copy of the old state manipulates depending on the action, it and returns the new state
const invoiceReducer = ( state = initialState, action ) => {

  let subt;
  let tx;
  let tot;

  switch (action.type) {
    case "ADD_ITEM":
      subt = state.charges.subtotal + action.payload.total;
      tx   = subt * 0.05;
      tot  = subt + tx;
      state = {
        ...state,
        items: [...state.items, action.payload],
        charges:{
          ...state.charges,
          subtotal: subt,
          tax: tx,
          total: tot
        }
      };
      break;
    case "REMOVE_ITEM":
      subt = state.charges.subtotal - action.payload.total;
      tx   = subt * 0.05;
      tot  = subt + tx;
      state = {
        ...state,
        items: [...state.items.filter(i => i.id !== action.payload.id)],
        charges:{
          ...state.charges,
          subtotal: subt,
          tax: tx,
          total: tot
        }
      };
      break;
    case "EDIT_ITEM":
      subt = action.payload.total;
      tx   = subt * 0.05;
      tot  = subt + tx;

      state = {
        ...state,
        items: [...state.items.filter(i => i.id !== action.payload.id), action.payload],
        charges:{
          ...state.charges,
          subtotal: subt,
          tax: tx,
          total: tot
        }
      };
      break;
    default:
  }
  return state;
};


// Middleware, just logging actions
// this executeds before the store gets updated
// const myLogger = (store) => (next) => (action) => {
//   console.log('Action Logged: ', action);
//   next(action);
// };



// this is the store we have set the initial value to 1
// the store stores the state
// the store knows that the reducer handles the dispatched actions
const store = createStore( invoiceReducer, applyMiddleware(logger));

// this fires every time the store is updated
// store.subscribe(()=>{
//   console.log('store updated', store.getState());
// })

// these are normally triggered from user events

// store.dispatch({
//   type: "ADD_ITEM",
//   payload: {
//     id: itemCounter++,
//     name: 'cog',
//     qty: 1,
//     price: 5.00,
//     total: 100
//   }
// })

// store.dispatch({
//   type: "ADD_ITEM",
//   payload: {
//     id: itemCounter++,
//     name: 'gear',
//     qty: 2,
//     price: 5.00,
//     total: 100
//   }
// })

// store.dispatch({
//   type: "REMOVE_ITEM",
//   payload: {
//     id: 0,
//     name: 'cog',
//     qty: 2,
//     price: 5.00,
//     total: 100
//   }
// })

// store.dispatch({
//   type: "EDIT_ITEM",
//   payload: {
//     id: 1,
//     name: 'cog',
//     qty: 2,
//     price: 5.00,
//     total: 200
//   }
// })

// Provider connects the store to our redux applacation
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);