import React, { useEffect, useState } from "react";
import "../../../css/main-content/user-post/user-info.css";
import { AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";

export const UserInfo = ({ post }) => {
  
  const [userTitle, setUserTitle] = useState('')
  const randomTimeNum = Math.floor(Math.random() * 24) + 1;


  useEffect(() => {
    if(post.user) {
      console.log(typeof post.title);
    setUserTitle(typeof post.user.title === "string" ? post.user.title.trim() : "")
    }
    
  }, [post])

  return (
    <>
      {post.user ? (
          <div className="user-info">
      
          <div className="img-container">
            <img
              src={
                post.user.image
                  ? post.user.image
                  : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
              alt=""
            />
          </div>
    
          <div className="user-details">
            <span className="user-name">{`${post.user.name} ${post.user.surname}`}</span>
            <span className="user-title">{userTitle}</span>
            <span className="time-passed">
              <span>{randomTimeNum === 24 ? "1d" : `${randomTimeNum}h`}</span>
              <div className="dot" />
              <AiOutlineGlobal style={{ fontSize: "15px" }} />
            </span>
          </div>
          <a href="#" className="follow-btn">
            <AiOutlinePlus className="plus-icon" style={{ fontSize: "18px" }} />
            Follow
          </a>
        </div>
        ) : null}  
    </>
    
  );
};
