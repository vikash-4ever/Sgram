import "./topbar.css";
import {Search, Person, Chat, Notifications, Logout} from "@mui/icons-material";
import React, { useContext, useState } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar({toggleNotification, toggleFriendRequest, toggleChatMessage}){
    const { user, dispatch } = useContext(AuthContext);
    const [searchInput, setSearchInput] = useState("");
    const PF ="http://localhost:8800/images/";

    const handleSubmit = (e)=>{
        e.preventDefault();
        window.location.href=`/profile/${searchInput}`;
        setSearchInput("");
    }
    
    const handleKeyDown = (e)=>{
        if(e.key === "Enter"){
            handleSubmit(e);
        }
    };

    const handleLogout = () =>{
        localStorage.removeItem("user");
        window.location.href = "/login";
        dispatch({type:"LOGOUT"});
    };
 
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">SGram</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <form onSubmit={handleSubmit}>
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input 
                        placeholder="Search" 
                        className="searchInput" 
                        value={searchInput} 
                        onChange={(e)=>setSearchInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                </form>
            </div>
            <div className="topbarRight">
                <div className="topbarIcons">
                    <div className="topbarIconItem" onClick={toggleFriendRequest}>
                        <Person/>
                        <span className="topbarIconBadge">0</span>
                    </div>
                    <div className="topbarIconItem" onClick={toggleChatMessage}>
                        <Chat/>
                        <span className="topbarIconBadge">0</span>
                    </div>
                    <div className="topbarIconItem" onClick={toggleNotification}>
                        <Notifications/>
                        <span className="topbarIconBadge">0</span>
                    </div>
                    <div className="topbarItemIcon" onClick={handleLogout} style={{cursor:"pointer"}}>
                        <Link to="/login" className="logoutLink" style={{textDecoration:"none"}}></Link>
                        <Logout/>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                <img className="topbarImg" src={ user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt=""/>
                </Link>
            </div>
        </div>
    );
}