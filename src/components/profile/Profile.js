import React from 'react'
import './Profile.css'
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo.js'

function Profile(props) {
    return (     
    <div className='profile'>
      <ProfileInfo/>
      <Posts postsItems={props.profilePage.postsItems}
             addPost = {props.addPost} 
             newPostText = {props.newPostText}
             onPostChange = {props.onPostChange}/>
             {console.log(props)}
    </div>   
    )
  }
export default Profile