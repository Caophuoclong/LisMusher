import React from 'react';
import User from "./user";
import ListRoom from "./list-room";
function index(props) {
    return (
        <div className="leftSide flex fl-col">
            <User/>
            <ListRoom/>
        </div>
    );
}

export default index;