import React from "react";
import FacebookEmoji from "react-facebook-emoji";
import "./Reaction.css";

function Reaction() {
  return (
    <div className="like_emoji">
      <FacebookEmoji className="emo" type="like" />
      <FacebookEmoji type="love" className="emo" />
      <FacebookEmoji type="wow" className="emo" />
      <FacebookEmoji className="emo" type="yay" />
      <FacebookEmoji className="emo" type="angry" />
      <FacebookEmoji className="emo" type="haha" />
      <FacebookEmoji className="emo" type="sad" />
    </div>
  );
}

export default Reaction;
