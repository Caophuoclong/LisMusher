import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import casual from "casual-browserify";
import asd, {getTitle, getId} from "../../../../components/inforYoutube";
import music from "../../music"
import { set } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../musicListInfoSlice";

Index.propTypes = {
  listMusic: PropTypes.array,
};

Index.defaultProps = {
  listMusic: [
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


function Index(props) {
  const {handleSelect} = props;
  const listSong = useSelector(state => state.music);
  return (
      <div>
        <ul className="rooms">
            {listSong.map((value,pos)=>
                <li className="list__music" key={pos} >
                    <a className="rooms__room flex align-center link__music" href={value.url} onClick={handleSelect}>
                    <img src={value.img_url} alt="" className="rooms__room--avatar" />
                    <span  className="rooms__room--name fw overflow" >{value.title}</span>
                    </a>
                </li>
            )}
          </ul>
      </div>
  );
}

export default Index;
