import React from "react";
import elonmini from '../../../../img/elon_mini.jpg';
import './Post.css'
function Post(props) {
    return (
        <div className="post">
            <img src={elonmini}></img>
            <span>Elon Musk</span>
            <p>{props.message}</p>
            <span className="likes">{props.likes}</span>
            <p className="likes">likes</p>
        </div>
    )
}
export default Post