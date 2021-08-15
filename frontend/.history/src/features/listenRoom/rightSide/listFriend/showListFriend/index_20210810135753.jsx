import React from "react";
import { useSelector } from "react-redux";

function ShowListFriend(props) {
  const friendList = useSelector((state) => state.friendList);
  const {listMember} = props;
  return (
    <ul className="list-items list-friends">
      {listMember.map((value, pos) => (
        <li className="item friend" key={pos}>
          <img src={value.url_img_friend} alt="" className="item--avatar" />
          <span className="item--name fw overflow">{value.memberName}</span>
        </li>
      ))}
    </ul>
  );
}

export default ShowListFriend;
