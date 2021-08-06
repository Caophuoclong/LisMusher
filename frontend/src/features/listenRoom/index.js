import React, { useState } from "react";
import "./listenRoom.scss";
import LeftSide from "./leftSide";
import Main from "./main";
import RightSide from "./rightSide";
function Index(props) {
  const [linkMusic, setLinkMusic] = useState(
    "https://www.youtube.com/watch?v=EwFyU2ou-lA&ab_channel=KARIK"
  );
  const getLink = (value) => {
    setLinkMusic(value);
  };
  return (
    <div className="flex fl-start h-1">
      <LeftSide getLink={getLink} />
      <Main url={linkMusic} />
      <RightSide />
    </div>
  );
}

export default Index;
