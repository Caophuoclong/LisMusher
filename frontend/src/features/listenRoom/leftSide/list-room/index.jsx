import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import casual from "casual-browserify";
import asd, {getTitle, getId} from "../../../../components/inforYoutube";
import music from "../../music"
import { set } from "react-hook-form";
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
    const [info, setInfo] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const handleAClick = (e)=>{
      e.preventDefault();
      console.log(e);
    }
    const handleCounter = ()=>{
      setRefresh(refresh+1);
    }
    const musicList = music.musicList;
    useEffect(()=>{
        let arrayMusic = [];
        musicList.forEach( async value=>{
            const id = getId(value);
            const res = await getTitle(id);
            const title = res.data.items[0].snippet.title;
            const img_url = `https://img.youtube.com/vi/${id}/0.jpg`
            arrayMusic.push({url:value,img_url, title});
        })
        setInfo(arrayMusic);
    },[])
    console.log(info);
  return (
      <div>
        <div>
          <button onClick={handleCounter}>xin chao</button>
        </div>
        <ul className="rooms">
            {info.map((value,pos)=>
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
