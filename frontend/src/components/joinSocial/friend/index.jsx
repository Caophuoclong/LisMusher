import React from 'react';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddFriend from './addFriend';
import { useDispatch } from 'react-redux';
import { addFriend } from '../../../features/listenRoom/listFriendSlice';

Friend.propTypes = {
    
};

function Friend(props) {
    const dispatch = useDispatch();
    const handleFormSubmit = (data,e)=>{
        const id = data.inp_id_user;
        if(id){
            const action = addFriend({url_img_friend: "https://picsum.photos/36",name_friend: id})
            dispatch(action);
        }
        else{
            alert("Please type name friend.");
        }
        e.target.reset();
    }
    return (
        <div className="friend-container">
            <FontAwesomeIcon className="icon" icon={faUserFriends} size="2x"/>    
            <AddFriend onSubmitForm={handleFormSubmit}/>
        </div>
    );
}

export default Friend;