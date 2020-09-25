import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "../firebase";
import firebase from "firebase";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        {/* <Avatar src={user.photoURL} /> */}
        <Avatar src="data:image/png;base64,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" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // placeholder={`what's on your mind  ${user.displayName} ? `}
            type="text"
          />

          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="image URL (optional)"
          />
          <button onClick={handleSubmit} type="submit" type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
