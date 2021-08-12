import React from 'react';
import ListRoom from "./listRoom";
import ListFriend from "./listFriend";
import "./social.scss";
import { useDispatch } from 'react-redux';
import {addRoom} from "../listRoomSlice"
import {addFriend} from "../listFriendSlice"
import {listFriend} from "../friends"

function Index(props) {
    const dispatch = useDispatch();
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