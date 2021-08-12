import React from 'react';
import ShowListRoom from "./showListRoom";
ListFrom.propTypes = {
    
};

function ListFrom(props) {
    const {handleShowMemberClick} = props;
    return (
        <div className="list-room rightSide__child">
            <ShowListRoom handleShowMemberClick={handleShowMemberClick}/>
        </div>
    );
}

export default ListFrom;