import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import Facebookemoji from "./Reaction";

function Post({ profilePic, image, username, timestamp, message }) {
  const [emoji, setEmoji] = useState(false);

  // const handleemoji = () => {
  //   setEmoji(<Facebookemoji />);
  // };

  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topinfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <p>
          <img style={{ width: "100%" }} src={image}></img>
        </p>
      </div>

      <div className="post_options">
        <div
          onMouseEnter={() => setEmoji(true)}
          onMouseLeave={() => setEmoji(true)}
          className="likeemoji"
        >
          {emoji && (
            <span className="facebookemojiset">
              <Facebookemoji />
            </span>
          )}
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
