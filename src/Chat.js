import React from 'react';
import "./Chat.css";
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
function Chat({name, msg, dp, timeStamp}) {
    return (
        <Link to={`/chat/${name}`}>
        <div className="chat">
            <Avatar className="chat-image" alt={name} src={dp}></Avatar>
            <div className="chat-details">
                <h2>{name}</h2>
                <p>{msg}</p>
            </div>
            <p className="chat-timestamp">{timeStamp}</p>
        </div>
        </Link>
    );
}

export default Chat;