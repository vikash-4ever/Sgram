import "./sidebar.css"
import {RssFeed, Chat, PlayCircle, Group, HelpOutline, Event} from "@mui/icons-material"
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";


export default function sidebar(){

    
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <Link to="/" style={{textDecoration:"none"}} className="sidebarLink">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </Link>   
                    </li>
                    <li className="sidebarListItem" >
                    <Link to="/messenger" style={{textDecoration:"none"}} className="sidebarLink">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </Link>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircle className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <h4 className="sidebarFriendListTitle">Friend Suggestions</h4>
                <ul className="sidebarFriendList">
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}