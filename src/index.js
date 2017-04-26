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
// I would have put this in a file of its own, for the exercise I have not
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
      // remove old item calc charges
      // add new item calc charges
      const targetItem = state.items.find(it => it.id === action.payload.id);
      console.log('remove this: ',targetItem);
      console.log('insert this: ',action.payload);

      subt = state.charges.subtotal - targetItem.total + action.payload.total;
      tx   = subt * 0.05;
      tot  = subt + tx;

      // immutability is beautiful
      state = {
        ...state,
        items: [...state.items.map((i) => {
            if (i.id !== action.payload.id) {
              return i;
            }
            return {
              ...i,
              ...action.payload
            };
          })
        ],
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

// the store stores the state
// the store knows that the reducer handles the dispatched actions
const store = createStore( invoiceReducer, applyMiddleware(logger));

// these are normally triggered from user events
// I left these to show my work, these were test actions
// I made the entire application work initially without react before i built any UI
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

// Provider connects the store to our redux application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);