import React from "react";
import './Dialogs.css';
import Dialogs_item from "./dialogs_item/Dialogs_item";
import Message from "./messages/message";
import ReactDOM from "react-dom";
import { NavLink , BrowserRouter as Router ,  Switch,
    useLocation } from "react-router-dom";
function Dialogs() {
    return (
        <div className="dialogs">
            <div className="dialog">
                <Dialogs_item name={"Иван"} id={'1'}/>
                <Dialogs_item name={"Иллон"} id={'2'}/>
                <Dialogs_item name={"Аркадий"} id={'3'}/>
            </div>

            <div className="messages">
                <Message message={'fhkhdkdfdfhlfsf'}/>
            </div>
            <div className="code">
                <input type="text" name="message" className="sendtext" placeholder="Введите сообщение"/>
                <button className="send">Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs