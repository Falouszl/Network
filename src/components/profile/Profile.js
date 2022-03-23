import React from "react";
import './Profile.css'
import elon from '../../img/elon.jpg';
import Posts from './posts/Posts'
function Profile(props) {
    return (
        <div className="profile">
            <div className="me">
                <img src={elon} alt="Здесь"/>
                <div className="pchki">
                <p>{props.name}</p>
                <p>Минск</p>
                <p>Порхай как бабочка жаль как пчела</p>
                </div>
            </div>
            <Posts/>
        </div>
    )
}
export default Profile