import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {  useSelector } from "react-redux";
import { getId } from "../../../../components/inforYoutube";
import "./listMusic.scss"

function Index(props) {
  const {handleSelect, onDeleteClicked} = props;
  
  const listSong = useSelector(state => state.music);
  return (
      <div>
        <ul className="rooms">
            {listSong.map((value,pos)=>
                <li  key={pos} >
                    <a className="rooms__room flex align-center link__music"  href={value.url} onClick={handleSelect}>
                    <img src={value.img_url} alt="" className="rooms__room--avatar" />
                    <span  className="rooms__room--name fw overflow" >{value.title}</span>
                    <button onClick={onDeleteClicked} className="delete-song" id={getId(value.url)} >
                      x
                    </button>
                    </a>
                </li>
            )}
          </ul>
      </div>
  );
}

export default Index;
