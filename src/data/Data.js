
let store = {
  _state : {

    profilePage: {
        postsItems: [
            {message: 'Hi, world', likes: 0},
            {message: 'I`m Elon Mask, really', likes: 3},
            {message: 'Give me some bitcoins', likes: 10}
          ],
          newPostText : 'Hello',
          newDialogText : 'Hello'
    },
    dialogsPage: {
        dialogNames: [
            {name:'Ivan Ivanov', id: 1},
            {name:'Ilon Mask', id: 2},
            {name:'Bill Gates', id: 2}
          ],
           messageItems:  [
            {message:'Hi!', id: 1},
            {message:'Go on the Mars', id: 1},
            {message:'Where is my chip?', id: 1}
          ]
     },
     navMenu: {
       friends: [
           {ava: 1, name: 'Vasya'},
           {ava: 1, name: 'Nikita'},
           {ava: 1, name: 'Oleg'}
       ]    
 }
},
/*
dispatch(action) {
  if ( action.type == 'ADD_POST') {
    let newPost = {
      message : this._state.profilePage.newPostText,
      id: 4 , 
      likes: 24 
    };
    this._state.profilePage.postsItems.unshift(newPost);
    this.rerenderTree(this._state);
  }
},*/


  sendMessage(dialogText) {
    let newMessage = {
      message: dialogText , 
      id : 4 
    }
      this._state.dialogsPage.messageItems.unshift(newMessage)
      this.rerenderTree(this._state)
  },
  addPost(postText) {
        let newPost = {
        message : postText,
        id: 4 , 
        likes: 24 
      };
    this._state.profilePage.postsItems.unshift(newPost);
    this.rerenderTree(this._state);
  },
  onPostChange(text) {
    this._state.profilePage.newPostText = text;
    this.rerenderTree(this._state)
  },
  onDialogChange(text) {
    this._state.profilePage.newDialogText = text;
    this.rerenderTree(this._state)
  },

  rerenderTree() {
    console.log('it is fake')
  },

  subscribe(observer) {
    this.rerenderTree = observer;
  }, 
  getState() {
    return this.state
  }   
       
}
export default store

