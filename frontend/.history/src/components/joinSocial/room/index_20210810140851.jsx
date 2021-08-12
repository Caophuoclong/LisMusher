import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';
import CreateAndJoinRoom from './createNjoinRoom';
import { useDispatch } from 'react-redux';
import { addRoom } from '../../../features/listenRoom/listRoomSlice';


Room.propTypes = {
    
};

function Room(props) {
    const dispatch = useDispatch();
    const handleCreateRoom = (e)=>{
        const roomname = document.getElementById("join-room").value;
        
        
        
        document.getElementById("join-room").value = '';
        
    }
    const handleJoinRoom = ()=>{

    }
    return (
        <div className="icon room-container">
            <FontAwesomeIcon className="icon" icon={faHotjar} size="2x"/>
            <CreateAndJoinRoom createRoom={handleCreateRoom}/>
        </div>
    );
}

export default Room;