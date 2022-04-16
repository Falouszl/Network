import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [ { text: 'Алло, почему не отвечаешь' , id: 1 , likes : 3} ,
                  { text: 'Был занят, сорян' , id: 2 , likes : 100} , 
                  { text: 'Ладно, набери как освободишься' , id: 3 , likes: 20 } 
                ]

let dialogsNames = [
                  { name:'Иван' , id:1 } , 
                  { name:'Иллон' , id:2 } ,
                  { name:'Аркадий' , id:3 }
                 ]
let messagesNames = [ 
                  { message:'Даров, что задали?' , id: 1 } , 
                  { message:'спроси у Аркаши' , id: 2 } , 
                  { message:'Я учил знаю, 77' , id: 3 } 
                  ]

ReactDOM.render(
  <React.StrictMode>
    <App 
      postsData ={postsData}
      dialogsNames = {dialogsNames}
      messagesNames = {messagesNames}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
