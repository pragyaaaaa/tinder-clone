import React from 'react';
import "./Chat.css";
import Avatar from '@material-ui/core/Avatar';
function Chat({name, msg, dp, timeStamp}) {
    return (
        <div className="chat">
            <Avatar className="chat-image" alt={name} src={dp}></Avatar>
            <div className="chat-details">
                <h2>{name}</h2>
                <p>{msg}</p>
            </div>
            <p className="chat-timestamp">{timeStamp}</p>
        </div>
    );
}

export default Chat;