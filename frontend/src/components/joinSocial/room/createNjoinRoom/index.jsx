import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

CreateAndJoinRoom.propTypes = {
    
};

function CreateAndJoinRoom(props) {
    const {createRoom, joinRoom} = props;
    return (
        <div  className="join-room-form">
             <input type="text"  id="join-room"/>
                <button onClick={joinRoom} type="button" className="btn btn-">
                    <FontAwesomeIcon  className="icon icon-signin" icon={faSignInAlt} />
                </button>
                <button onClick={createRoom} type="button" className="btn btn-">
                    <FontAwesomeIcon  className="icon icon-plus-circle" icon={faPlusCircle} />
                </button>
        </div>
    );
}

export default CreateAndJoinRoom;