import React from "react";
import FacebookEmoji from "react-facebook-emoji";
import "./Reaction.css";

function Reaction() {
  return (
    <div className="like_emoji">
      <FacebookEmoji type="like" />
      <FacebookEmoji type="love" />
      <FacebookEmoji type="wow" />
      <FacebookEmoji type="yay" />
      <FacebookEmoji type="angry" />
      <FacebookEmoji type="haha" />
      <FacebookEmoji type="sad" />
    </div>
  );
}

export default Reaction;
