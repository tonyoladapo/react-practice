import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Body = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Main />
    </div>
  );
};

export default Body;
