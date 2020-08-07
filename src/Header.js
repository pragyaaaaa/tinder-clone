import React from 'react'
import './Header.css';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChatIcon from '@material-ui/icons/Chat';
//functional component: Header
function Header(){
    return(
        //BEM naming convention
        <div class="header">
            <PersonOutlineIcon/>
            <img
            className="header-logo" 
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder-icon"></img>
            <ChatIcon/>
        </div>
    )
}

export default Header;