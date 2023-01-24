import React, { useState, useEffect } from "react";
import "../../css/main-content/user-post.css";
import { PostContent } from "./UserPost/PostContent";
import { PostControls } from "./UserPost/PostControls";
import { PostDescription } from "./UserPost/PostDescription";
import { PostStats } from "./UserPost/PostStats";
import { UserInfo } from "./UserPost/UserInfo";

const UserPost = ({ post }) => {
  return (
    <div className="user-post">
      <UserInfo post={post} />
      <PostDescription post={post} />
      <PostContent post={post} />
      <PostStats post={post} />
      <PostControls post={post} />
    </div>
  );
};

export default UserPost;
