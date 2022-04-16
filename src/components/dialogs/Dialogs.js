import React from "react";
import './Dialogs.css';
import Dialogs_item from "./dialogs_item/Dialogs_item";
import Message from "./messages/message";
import ReactDOM from "react-dom";
import { NavLink , BrowserRouter as Router ,  Switch,
    useLocation } from "react-router-dom";

function Dialogs(props) {
    return (
        <div className="dialogs">
            <div className="dialog">
                {props.dialogsNames.map((e) => <Dialogs_item name={e.name} id={e.id}/>)}
            </div>

            <div className="messages">
                {props.messagesNames.map((e) => <Message message={e.message} id={e.id}/>)}
            </div>

            <div className="code">
                <input type="text" name="message" className="sendtext" placeholder="Введите сообщение"/>
                <button className="send">Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs