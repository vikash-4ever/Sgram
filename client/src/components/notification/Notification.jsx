import "./notification.css";
import React from "react";

export default function Notification (){
    return(
        <div className="notification">
            <div className="notificationWrapper">
                <h4 className="notificationTitle">Notifications</h4>
                <div className="notificationListContainer">No new notifications found</div>
            </div>
        </div>
    );
}