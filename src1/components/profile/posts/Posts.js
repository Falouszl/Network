import React from "react";
//import elonmini from '../../../img/elon_mini.jpg';
import Post from './post/Post';
function Posts(props) {
    return ( 
        <div className="posts">
            <input placeholder="Введите сообщение"/>
            <button>Добавить сообщение</button>
            {props.postsData.map((e) => <Post message = {e.text} id = {e.id} likes = {e.likes}/>)}
        </div>
    )
}
export default Posts