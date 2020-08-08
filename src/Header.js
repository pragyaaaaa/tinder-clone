import React from 'react'
import './Header.css';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import { Link,useHistory } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
//functional component: Header
function Header({backButton}) {
    const history=useHistory();
    return (
        //BEM naming convention
        <div class="header">
            {backButton ? (
                <IconButton onClick={()=>history.replace(backButton)}>
                <ArrowBackIosRoundedIcon fontSize="large" className="header-icon"></ArrowBackIosRoundedIcon>
                </IconButton>
            ):(
            <IconButton>
                <PersonOutlineIcon className="header-icon" fontSize="large" />
            </IconButton>
            )}
            <Link to="/">
                <img
                    className="header-logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder-icon"></img>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ChatIcon className="header-icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;