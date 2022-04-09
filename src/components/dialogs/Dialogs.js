import React from "react";
import './Dialogs.css';
import Dialogs_item from "./dialogs_item/Dialogs_item";
import Message from "./messages/message";
import ReactDOM from "react-dom";
import { NavLink , BrowserRouter as Router ,  Switch,
    useLocation } from "react-router-dom";

let dialogsNames = [
                    { name:'Иван' , id:1 } , 
                    { name:'Иллон' , id:2 } ,
                    { name:'Аркадий' , id:3 }
                   ];
let messagesNames = [ 
                    { message:'Даров, что задали?' , id: 1 } , 
                    { message:'спроси у Аркаши' , id: 2 } , 
                    { message:'Я учил знаю, 77' , id: 3 } 
                    ];

function Dialogs() {
    return (
        <div className="dialogs">
            <div className="dialog">
                {dialogsNames.map((e) => <Dialogs_item name={e.name} id={e.id}/>)}
            </div>

            <div className="messages">
                {messagesNames.map((e) => <Message message={e.message} id={e.id}/>)}
            </div>

            <div className="code">
                <input type="text" name="message" className="sendtext" placeholder="Введите сообщение"/>
                <button className="send">Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs