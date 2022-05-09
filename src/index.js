import React from 'react';
import store from './data/Data';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendMessage , addPost, onPostChange, onDialogChange , subscribe } from  './data/Data.js';

export let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        store = {store}
        state = {state}
        addPost = {store.addPost.bind(store)}
        sendMessage = {store.sendMessage.bind(store)}
        onPostChange = {store.onPostChange.bind(store)}
        onDialogChange = {store.onDialogChange.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderTree(store.getState());
store.subscribe(rerenderTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


