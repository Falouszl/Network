import React from "react";
//import elonmini from '../../../img/elon_mini.jpg';
import Post from './post/Post'
function Posts() {
    return ( 
        <div className="posts">
            <input placeholder="Введите сообщение"/>
            <button>Добавить сообщение</button>
            <Post message="Hello world"/>
            <Post message = "I am  Elon Mush  , really"/>
            <Post message = " Give me some bitcoins "/>
        </div>
    )
}
export default Posts