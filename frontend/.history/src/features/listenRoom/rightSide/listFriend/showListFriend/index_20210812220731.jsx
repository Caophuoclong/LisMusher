import React from "react";

function ShowListFriend(props) {
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
