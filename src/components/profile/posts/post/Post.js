import React from "react";
import elonmini from '../../../../img/elon_mini.jpg';
function Post(props) {
    return (
        <div className="post">
            <img src={elonmini}></img>
            <span>Elon Musk</span>
            <p>{props.message}</p>
        </div>
    )
}
export default Post