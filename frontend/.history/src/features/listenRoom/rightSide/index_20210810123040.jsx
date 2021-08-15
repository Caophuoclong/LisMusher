import React from 'react';
import ListRoom from "./listRoom";
import ListFriend from "./listFriend";
import "./social.scss";
import { useDispatch } from 'react-redux';
import {addRoom} from "../listRoomSlice"
import {addFriend} from "../listFriendSlice"

function Index(props) {
    const dispatch = useDispatch();
    listRoom.forEach(value=>{
        const action = addRoom(value);
        dispatch(action);
    })
    listFriend.forEach(value=>{
        const action = addFriend(value);
        dispatch(action);
    })

    return (
        <div className="rightSide">
            <ListRoom/>
            <ListFriend/>
        </div>
    );
}

export default Index;