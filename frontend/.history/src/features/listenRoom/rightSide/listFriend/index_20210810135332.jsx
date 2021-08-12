import React from 'react';
import ShowListFriend from './showListFriend';

ListFriend.propTypes = {
    
};

function ListFriend(props) {
    const {listMember} = props;
    return (
        <div className="list-friend rightSide__child">
            <ShowListFriend listMember={listMember}/>
        </div>
    );
}

export default ListFriend;