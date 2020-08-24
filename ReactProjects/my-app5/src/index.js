import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';


// Action
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
// Reducer
const cnt = ( state= 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
// Store
let store = createStore( cnt);
store.subscribe(() => console.log("updated cnt="+store.getState()));

// Dispatch
store.dispatch( increment())
store.dispatch( increment())
store.dispatch( increment())
store.dispatch( decrement())


ReactDOM.render(
  <React.StrictMode>
    <App />
    <div><button onClick={()=>store.dispatch( increment())}>INCR</button>
    <button onClick={()=>store.dispatch( decrement())}>DECR</button></div>
    counter is {store.getState()}
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
