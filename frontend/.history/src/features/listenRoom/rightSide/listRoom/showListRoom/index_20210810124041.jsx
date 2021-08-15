import React, { useState } from 'react';
import {useSelector} from "react-redux";

function ShowListFriend(props) {
    const roomList = useSelector(state => state.roomList);
    const [memberInRoom, setMemberInRoom] = useState([]);
    roomList.forEach((room) => {
        console.log(room);
    })
    return (
        <ul className="list-items list-room">
            {roomList.map((value,pos)=>
                <li className="item room" key={pos} >
                    <img src={value.url_img_room} alt="" className="item--avatar room--avatar" />
                    <span  className="item--name -bottom-1room--name fw overflow" >{value}</span>
                </li>
            )}
          </ul>
    );
}

export default ShowListFriend;