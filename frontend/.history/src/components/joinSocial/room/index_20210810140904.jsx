import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';
import CreateAndJoinRoom from './createNjoinRoom';



Room.propTypes = {
    
};

function Room(props) {
    const handleCreateRoom = (e)=>{
        const roomName = document.getElementById("join-room").value;
        
        
        
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