import React from "react";
import './Dialogs.css';
import { Navlink } from "react-router-dom";
function Dialogs() {
    return (
        <div className="dialogs">

            


            <div className="message">
                <p>Вася</p>
                <p>привет , что задали по алгебре</p>
            </div>
            <div className="message">
                <p>Арсений</p>
                <p> ну , номер 174 буквы а , б</p>
            </div>
            <input type="text" className="sendtext" placeholder="Введите сообщение"/>
            <button className="send">Отправить</button>
        </div>
    )
}
export default Dialogs
/*
<div className="dialog">
<div className="user">
    <Navlink to="/dialogs/1">Ivan Ivanov</Navlink>
</div>
<div className="user">
    <Navlink to="/dialogs/2">Anton Lopat</Navlink>
</div>
<div className="user">
    <Navlink to="/dialogs/3">Elon Musk</Navlink>
</div>
</div>
*/