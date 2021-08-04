import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import getInfoVideo from "../../../../axiosClient/axiosClient";
import ShowMusicPlayer from "./showMusicPlayer";
Index.propTypes = {};

function Index(props) {
  const [playing, setPlaying] = useState(false);
  const [player, setPlayer] = useState();
  const [duration, setDuration] = useState();
  const [timeEnd, setTimeEnd] = useState();
  const [title, setTitle] = useState()
  const api_key = "AIzaSyDXKvZjPxqrtMsHduX_Ioygsb9Db_JW3sE";
    
  const ref = (pl) => {
    setPlayer(pl);
  };
  const handleProgress = (progress) => {
    setDuration(player.getCurrentTime());
  };
  const handleSetStartPlaying = () => {
    setPlaying(true);
  };
  const handleSetStopPlaying = () => {
    setPlaying(false);
  };
  const url =
    "https://www.youtube.com/watch?v=lxFmeBhoA1Y&ab_channel=H%C3%A0AnhTu%E1%BA%A5n";
  const youtube_parser_Id = (url) => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };
    const id = youtube_parser_Id(url);
    const getTitle = async (id,api_key)=>{
        const info = await getInfoVideo(id,api_key);
        return info;
    }
    getTitle(id,api_key).then(info=>{
        setTitle(info.data.items[0].snippet.title);
    });
    const setStatus = ()=>{
        if(playing)
            setPlaying(false);
        else{
            setPlaying(true);
        }
    }
    return (
    <div className="musicPlayer">
      <ReactPlayer
        ref={ref}
        className="player-react"
        url={url}
        playing={playing}
        onProgress={handleProgress}
        onDuration={(duration) => {
          setTimeEnd(duration);
        }}
      />

      <ShowMusicPlayer
        handlePlayingStart={handleSetStartPlaying}
        handlePlayingStop={handleSetStopPlaying}
        maxValue={timeEnd}
        current={duration}
        url_thumbnail = {`https://img.youtube.com/vi/${id}/0.jpg`}
        title_video = {title}
        status={playing}
        handleStatus={setStatus}
      />
    </div>
  );
}

export default Index;
