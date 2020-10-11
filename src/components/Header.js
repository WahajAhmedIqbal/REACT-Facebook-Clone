import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";
import { auth } from '../firebase'

function Header({ user }) {
  // const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <img
          alt="logo"
          src="http://www.pngplay.com/wp-content/uploads/3/Facebook-Logo-PNG-Clipart-Background.png"
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search..."></input>
        </div>
        {/*---------------------- HEADER CENTER PART ---------------------*/}
      </div>
      <div className="header_center">
        <div
          className="header_option 
        header_option--active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      {/* ------------------------- RIGHT PART HEADER */}
      <div className="header_right">
        <div className="header_info">
          {/* <Avatar src={user.photoURL} /> */}
          {/* fake  */}
          <Avatar src= {user.photoURL} 
          />

          {/* <h4>{user.displayName}</h4> */}
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton onClick ={() => auth.signOut()}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
