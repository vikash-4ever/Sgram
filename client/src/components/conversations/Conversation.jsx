import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({Conversation, currentUser}) {
    const [user,setUser] = useState([]);
    const PF ="http://localhost:8800/images/";

    useEffect(()=> {
        const friendId = Conversation.members.find((m)=> m !== currentUser._id);

        const getUser = async ()=>{
            try{
                const res = await axios("/users?userId="+ friendId);
                setUser(res.data);
            }catch(err){
                console.log(err);
            }
        };
        getUser();
    },[currentUser, Conversation]);

    return (
    <div className="conversation">
        <img className="conversationImg" src={user?.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" />
        <span className="conversationName">{user?.username}</span>
    </div>
    );
}