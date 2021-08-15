import React from 'react';
import Draggable from 'react-draggable'; // The default

import PropTypes from 'prop-types';
import Friend from "./friend";
import Room from "./room";
import "./joinSocial.scss"
import "./script"
function JoinSocial(props) {
    return (
        <Draggable defaultPosition={{x: 260,y:10}}>
        <div className="joinSocial" id="draggable-button">
            <Friend/>
            <Room/>
        </div>
        </Draggable>
    );
}

export default JoinSocial;