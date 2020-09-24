import React from "react";
import "./App.css";
import HeaderComp from "./components/Header";
import SidebarComp from "./components/Sidebar";
import FeedComp from "./components/Feed";
import Widgets from "./components/Widgets";
// import Login from "./components/Login";
// import { useStateValue } from "./components/StateProvider";

function App() {
  // const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/* {!user ? (
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
      )} */}
      <>
        <HeaderComp />
        <div className="app_body">
          <SidebarComp />
          <FeedComp />
          <Widgets />
        </div>
      </>
    </div>
  );
}

export default App;
