import React from "react";

let state = {
    profilePage : {
        postsData : [
            { text: 'Алло, почему не отвечаешь' , id: 1 , likes : 3} ,
            { text: 'Был занят, сорян' , id: 2 , likes : 100} , 
            { text: 'Ладно, набери как освободишься' , id: 3 , likes: 20 } 
        ]
    } , 

    dialogsPage : {
        dialogsNames : [
            { name:'Иван' , id:1 } , 
            { name:'Иллон' , id:2 } ,
            { name:'Аркадий' , id:3 }
        ],
        messagesNames : [ 
            { message:'Даров, что задали?' , id: 1 } , 
            { message:'спроси у Аркаши' , id: 2 } , 
            { message:'Я учил знаю, 77' , id: 3 } 
        ]
    }

}
export default state
