import React from "react";
import elon from '../../../img/elon.jpg';
function ProfileInfo(props) {
    return (
    <div className="me">
        <img src={elon} alt="Здесь"/>
        <div className="pchki">
        <p>{props.name}</p>
        <p>Минск</p>
        <p>Порхай как бабочка жаль как пчела</p>
        </div>
    </div>
    )
}
export default ProfileInfo