import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Notification from "../../components/notification/Notification";
import FriendRequest from "../../components/friendRequest/FriendRequest";
import ChatMessage from "../../components/chatMessage/ChatMessage";
import "./home.css";
import React, { useState } from "react";


export default function Home(){
    const [showNotification, setNotification] = useState(false);
    const toggleNotification = () =>{
        setNotification((prevState)=> !prevState);
        setFriendRequest(false);
        setChatMessage(false);
    };

    const [showFriendRequest, setFriendRequest] = useState(false);
    const toggleFriendRequest = () =>{
        setFriendRequest((prevState)=> !prevState);
        setNotification(false);
        setChatMessage(false);
    };

    const [showChatMessage, setChatMessage] = useState(false);
    const toggleChatMessage = () =>{
        setChatMessage((prevState)=> !prevState);
        setFriendRequest(false);
        setNotification(false);
    };

    return(
        <>
            <Topbar 
                toggleNotification={toggleNotification} 
                toggleFriendRequest={toggleFriendRequest} 
                toggleChatMessage={toggleChatMessage}
            />
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                {showNotification ? (<Notification/>) : showFriendRequest ? (<FriendRequest/>) : showChatMessage ? (<ChatMessage/>) : (<Rightbar/>)}     
            </div>
        </>
    );
}