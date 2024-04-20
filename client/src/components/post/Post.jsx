import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import {format} from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}){
    const [like,setLike] = useState(post.likes.length);
    const [isLiked,setIsLiked] = useState(false);
    const [user,setUser] = useState({});
    const [posts,setPosts] = useState();
    const [deleteOption,setDeleteOption] = useState(false);
    const PF ="http://localhost:8800/images/";
    const {user : currentUser} = useContext(AuthContext);

    useEffect (() =>{
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id,post.likes]);

    useEffect (() =>{
        const fetchUser = async ()=>{
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchUser(); 
    }, [post.userId]);

    const likeHandler = async ()=>{
        try{
            await axios.put("/posts/" + post._id + "/like",{userId : currentUser._id});
            setLike(isLiked ? like-1 : like+1);
            setIsLiked(!isLiked);
        }catch(err){
            console.log(err);            
        }
    };

    const deleteHandler = async () =>{
        try{
           const res = await axios.delete(`/posts/${post._id}`,{data : {userId : currentUser._id}});
           setPosts(posts.filter((p)=> p._id !== post._id));
        }catch(err){
            console.log(err);
        }
        window.location.reload();
    };

    const handleMoreVertClick =  ()=>{
        setDeleteOption(currentUser._id === post.userId);
    };


    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                        <img className="postProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="more" onClick={handleMoreVertClick} />
                        {deleteOption && <button className="deleteButton" onClick={deleteHandler}>Delete</button>}
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF+post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                    <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it.</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
