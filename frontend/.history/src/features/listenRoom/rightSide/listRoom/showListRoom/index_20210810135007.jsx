import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { uri } from "../../../../../axiosClient/apiAxiosClient";
import ListFriend from "../../listFriend";

function ShowListFriend(props) {
  const roomList = useSelector((state) => state.roomList);
  const token = JSON.parse(window.localStorage.getItem("token"));
  const [handleShowMemberClick] = props;

  return (
      <div>
    <ul className="list-items list-room">
      {roomList.map((value, pos) => (
        <li className="item room" id={pos} key={pos}>
          <a
            className="item--name -bottom-1room--name fw overflow"
            href={value}
            onClick={handleShowMemberClick}
          >
            {value}
          </a>
        </li>
      ))}
    </ul>
    <ListFriend/>
    </div>
  );
}

export default ShowListFriend;
