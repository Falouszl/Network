import React from "react";
//import elonmini from '../../../img/elon_mini.jpg';
import Post from './post/Post';
let postsData = [ { text: 'Алло, почему не отвечаешь' , id: 1 , likes : 3} ,
                  { text: 'Был занят, сорян' , id: 2 , likes : 100} , 
                  { text: 'Ладно, набери как освободишься' , id: 3 , likes: 20 } 
                ];
function Posts() {
    return ( 
        <div className="posts">
            <input placeholder="Введите сообщение"/>
            <button>Добавить сообщение</button>
            {postsData.map((e) => <Post message = {e.text} id = {e.id} likes = {e.likes}/>)}
        </div>
    )
}
export default Posts