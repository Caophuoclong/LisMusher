import React from "react";
import { useSelector } from "react-redux";


function ShowListFriend(props) {
  const roomList = useSelector((state) => state.roomList);
  const {handleShowMemberClick} = props;

  return (
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
  );
}

export default ShowListFriend;
