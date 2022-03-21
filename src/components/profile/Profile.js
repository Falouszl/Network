import React from "react";
import './Profile.css'
import elon from '../../img/elon.jpg';
import elonmini from '../../img/elon_mini.jpg';
function Profile() {
    return (
        <div className="profile">
            <div className="me">
                <img src={elon} alt="Здесь"/>
                <p>Elon Musk</p>
            </div>
            <div className="posts">
                <input placeholder="Введите сообщение"/>
                <button>Добавить сообщение</button>
                <div className="post">
                    <img src={elonmini}/>
                    <span>Elon Musk</span>
                    <p>Some text</p>
                </div>
            </div>
        </div>
    )
}
export default Profile