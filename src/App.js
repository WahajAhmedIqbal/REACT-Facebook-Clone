import React from "react";
import "./App.css";
import HeaderComp from "./components/Header";
import SidebarComp from "./components/Sidebar";
function App() {
  return (
    <div className="app">
      <HeaderComp />
      <div className="app_body">
        <SidebarComp />
      </div>
    </div>
  );
}

export default App;
