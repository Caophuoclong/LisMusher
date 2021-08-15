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
        const value = document.getElementById("join-room").value;
        console.log(value);
        if(value){
            const action = addRoom({url_img_room: "https://picsum.photos/36",name_room: value});
            dispatch(action);
        }
        else{
            alert("Please type a room name");
        }
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