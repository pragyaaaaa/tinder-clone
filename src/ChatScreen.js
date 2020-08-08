import React, { useState } from 'react';
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar';
function ChatScreen() {
    const [input, setInput] = useState('');
    const [msgs, setmsg] = useState([
        {
            name: "Sarah",
            image: "",
            msg: "How's it all?",
        },
        {
            name: "Sarah",
            image: "",
            msg: "How's it all?",
        },
        {
            name: "Sarah",
            image: "",
            msg: "How's it all?",
        },
        {
            msg: "great!! what about you?",
        },
    ]);
    const handleSend = e => {
        e.preventDefault();
        setmsg([...msgs, { msg: input }]);
        setInput('');
    };
    return (
        <div className="chatscreen">
            <p className="chatscreen-timestamp">You matched with Sarah on 10/03/2020</p>
            {msgs.map((msg) => (
                msg.name ? (
                    <div className="chatscreen-msg">
                        <Avatar
                            className="chatscreen-img"
                            alt={msg.name}
                            src={msg.msg}></Avatar>
                        <p className="chatscreen-text">{msg.msg}</p>
                    </div>
                ) : (
                        <div className="chatscreen-msg">
                            <p className="chatscreen-textuser">{msg.msg}</p>
                        </div>
                    )))}
                <form className="chatscreen-input">
                    <input
                    className="chatscreen-inputfield"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                        type="text" />
                    <button onClick={handleSend} type="submit" className="chatscreen-inputbutton">Send</button>
                </form>
        </div>
    );
}

export default ChatScreen;