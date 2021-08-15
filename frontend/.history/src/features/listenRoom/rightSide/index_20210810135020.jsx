import React from 'react';
import ListRoom from "./listRoom";
import ListFriend from "./listFriend";
import "./social.scss";
import { useDispatch } from 'react-redux';
import {addRoom} from "../listRoomSlice"
import {addFriend} from "../listFriendSlice"
import {listFriend} from "../friends"
import { uri } from '../../../axiosClient/apiAxiosClient';
import axios from 'axios';

function Index(props) {
    const dispatch = useDispatch();
    listFriend.forEach(value=>{
        const action = addFriend(value);
        dispatch(action);
    })
    const showListMember = async (e) => {
        e.preventDefault();
        document.querySelectorAll(".item--name").forEach((value) => {
          value.classList.remove("selected");
        });
        e.target.classList.add("selected");
        const room = e.target.innerText;
        const url = uri + `/dashboard/getmemberinroom?roomname=${room}`;
        const headers = {
          authorization: token,
        };
        const response = await axios.get(url, {
          headers: headers,
        });
        console.log(response.data.members);
      };

    return (
        <div className="rightSide">
            <ListRoom/>
            <ListFriend/>
        </div>
    );
}

export default Index;