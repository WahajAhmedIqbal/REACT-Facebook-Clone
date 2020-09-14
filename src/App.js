import React from "react";
import "./App.css";
import HeaderComp from "./components/Header";
import SidebarComp from "./components/Sidebar";
import FeedComp from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
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
      )}
    </div>
  );
}

export default App;
