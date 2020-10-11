import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderComp from "./components/Header";
import SidebarComp from "./components/Sidebar";
import FeedComp from "./components/Feed";
import Widgets from "./components/Widgets";
import { auth } from './firebase'
import Login from "./components/Login";
// import { useStateValue } from "./components/StateProvider";

function App() {
  // const [{ user }, dispatch] = useStateValue();
  const [user, setUser]= useState('')

  useEffect(() => {
    const unsubscibe= auth.onAuthStateChanged(authUser => {
      setUser(authUser)
      console.log(authUser)
    })
  }, [])

  return (
      /* {!user ? (
        <Login />
      ) : (
        <>
          <HeaderComp />
          <div className="app_body">
            <SidebarComp />
            <FeedComp />
            <Widgets />
          </div>
        </>
      )} */
      !user ?(
        <div className="app">
          <Login/>
        </div>
      )
      : (
        <div className="app">
          <HeaderComp user= {user} />
          <div className="app_body">
            <SidebarComp />
            <FeedComp user= {user} />
            <Widgets />
          </div>
        </div>
      )
  );
}

export default App;
