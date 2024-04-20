import "./friendRequest.css";
import React from "react";

export default function FriendRequest (){
    return(
        <div className="friendRequest">
            <div className="friendRequestWrapper">
                <h4 className="friendRequestTitle">Friend Requests</h4>
                <div className="friendRequestListContainer">No new friend requests found</div>
            </div>
        </div>
    );
}