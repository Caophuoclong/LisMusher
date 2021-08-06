import React from 'react';
import PropTypes from 'prop-types';
import ListRoom from "./listRoom";
import ListFriend from "./listFriend";
import "./social.scss";
import { useDispatch } from 'react-redux';
import {addRoom} from "../listRoomSlice"
import {addFriend} from "../listFriendSlice"
import {listRoom} from "../rooms";
import {listFriend} from "../friends"

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