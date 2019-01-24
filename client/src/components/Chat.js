import React from 'react';

class Chat extends React.Component {

    render() {
        return(
            <>
                <div id="mario-chat">
                    <div id="chat-window">
                        <div id="output"></div>
                        <div id="feedback"></div>
                    </div>
                    <input id="handle" type="text" placeholder="Handle" />
                    <input id="message" type="text" placeholder="Message" />
                    <button id="send">Send</button>
                </div>
            </>
        )
    }
}

export default Chat;