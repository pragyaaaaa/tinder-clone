import React from 'react';
import Chat from './Chat';
function Chats(){
    return(
        <div className="chats">
            <Chat
                name="Sarah"
                msg="What's up?"
                timeStamp="35 min ago"
                dp="">
            </Chat>
        </div>
    )
}

export default Chats;