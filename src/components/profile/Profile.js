import React from "react";
import './Profile.css'
import elon from '../../img/elon.jpg';
import Posts from './posts/Posts';
import ProfileInfo from './profileInfo/ProfileInfo';
function Profile(props) {
    return (
        <div className="profile">
            <ProfileInfo/>
            <Posts postsData = {props.postsData}/>
        </div>
    )
}
export default Profile