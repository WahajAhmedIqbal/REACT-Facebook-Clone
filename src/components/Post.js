import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Post({ porfilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={porfilePic} className="post_avatar" />
        <div className="post_topinfo">
          <h3>{username}</h3>
          <p>Timestamp...</p>
        </div>
        <p>{message}</p>
      </div>
      <div className="post_bottom">
        <p>
          <img src={image}></img>
        </p>
      </div>
      <div className="post_options">
        <div className="post_option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
