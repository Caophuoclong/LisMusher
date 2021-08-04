import React from "react";
import PropTypes from "prop-types";
import casual from "casual-browserify";
index.propTypes = {
  listRoom: PropTypes.array,
};

index.defaultProps = {
  listRoom: [
    {
      room_img_url: "https://picsum.photos/48",
      room_name: casual.name,
    },
    {
        room_img_url: "https://picsum.photos/48",
        room_name: casual.name,
      },
      {
        room_img_url: "https://picsum.photos/48",
        room_name: casual.name,
      },
      {
        room_img_url: "https://picsum.photos/48",
        room_name: casual.name,
      },
      {
        room_img_url: "https://picsum.photos/48",
        room_name: casual.name,
      },
      {
        room_img_url: "https://picsum.photos/48",
        room_name: casual.name,
      },
      {
        room_img_url: "https://picsum.photos/48",
        room_name: casual.name,
      },
      {
        room_img_url: "https://picsum.photos/48",
        room_name: casual.name,
      },
  ],
};

function index(props) {
    const {listRoom} = props;
    console.log(listRoom);
  return (

      <div>
          <ul className="rooms">
            {listRoom.map((value,pos)=>
                <li className="rooms__room flex align-center" key={pos}>
                    <img src={value.room_img_url} alt="" className="rooms__room--avatar" />
                    <p className="rooms__room--name fw overflow">{value.room_name}</p>
                </li>
          
            )}
          </ul>
      </div>
  );
}

export default index;
