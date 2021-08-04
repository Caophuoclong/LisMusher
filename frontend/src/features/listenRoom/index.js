import React from "react";
import "./listenRoom.scss";
import LeftSide from "./leftSide";
import Main from "./main";
import ResultSearch from "./resultSearch";
function index(props) {
  return (
    <div className="flex fl-start h-1">
      <ResultSearch />
      <LeftSide />
      <Main />
    </div>
  );
}

export default index;
