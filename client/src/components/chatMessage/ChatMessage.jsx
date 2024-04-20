import "./chatMessage.css";
import React from "react";

export default function ChatMessage (){
    return(
        <div className="chatMessage">
            <div className="chatMessageWrapper">
                <h4 className="chatMessageTitle">Messages</h4>
                <div className="messageListContainer">No new messages found</div>
            </div>
        </div>
    );
}