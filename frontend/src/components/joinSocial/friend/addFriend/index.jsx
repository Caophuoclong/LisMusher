import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
AddFriend.propTypes = {
    
};

function AddFriend(props) {
    const {register, handleSubmit } = useForm();
    const {onSubmitForm} = props;
    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="add-friend-form">
             <input type="text"  {...register("inp_id_user")}/>
                <button type="submit" className="btn btn-">
                    <FontAwesomeIcon  className="icon-plus" icon={faPlus} />
                </button>
        </form>
    );
}

export default AddFriend;