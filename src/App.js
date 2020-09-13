import React from "react";
import "./App.css";
import HeaderComp from "./components/Header";
import SidebarComp from "./components/Sidebar";
import FeedComp from "./components/Feed";
import Widgets from "./components/Widgets";
function App() {
  return (
    <div className="app">
      <HeaderComp />
      <div className="app_body">
        <SidebarComp />
        <FeedComp />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
