import React from 'react';
import PropTypes from 'prop-types';

index.propTypes = {
    user_img: PropTypes.string,
    user_name: PropTypes.string,

};
index.defaultProps  ={
    user_img_url: "https://picsum.photos/36",
    user_name: "Phuoc Long"
}

function index(props) {
    const {user_img_url, username} = props;
    return (
        <div className="user">
            <img src={user_img_url} alt="" className="user__avatar" />
            <p className="user__name fw">{username}</p>
        </div>
    );
}

export default index;