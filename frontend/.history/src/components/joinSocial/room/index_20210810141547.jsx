import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';
import CreateAndJoinRoom from './createNjoinRoom';
import { uri } from '../../../axiosClient/apiAxiosClient';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addRoom } from '../../../features/listenRoom/listRoomSlice';



Room.propTypes = {
    
};

function Room(props) {

    const dispatch = useDispatch();
    const handleCreateRoom = async (e)=>{
        const roomName = document.getElementById("join-room").value;
        const url = uri + "/dashboard/createroom";
        const token = JSON.parse(window.localStorage.getItem("token"));
        const headers = {
            authorization: token,
        }
        const response = await axios.post(url,{roomName},{
            headers: headers,
        })
        const action = addRoom(roomName);
        dispatch(action);
        document.getElementById("join-room").value = '';
    }
    const handleJoinRoom = async ()=>{
        const roomName = document.getElementById("join-room").value;
        const url = uri + "/dashboard/createroom";
        const token = JSON.parse(window.localStorage.getItem("token"));
        const headers = {
            authorization: token,
        }
        const response = await axios.post(url,{roomName},{
            headers: headers,
        })
        const action = addRoom(roomName);
        dispatch(action);
        document.getElementById("join-room").value = '';

    }
    return (
        <div className="icon room-container">
            <FontAwesomeIcon className="icon" icon={faHotjar} size="2x"/>
            <CreateAndJoinRoom createRoom={handleCreateRoom}/>
        </div>
    );
}

export default Room;