import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import { getTitle, getId } from "../../../../components/inforYoutube";
import ShowMusicPlayer from "./showMusicPlayer";
Index.propTypes = {};

function Index(props) {
  const {linkMusic} = props;
  const [playing, setPlaying] = useState(false);
  const [player, setPlayer] = useState();
  const [duration, setDuration] = useState();
  const [timeEnd, setTimeEnd] = useState();
  const [title, setTitle] = useState();
  const [randomLoop, setRandomLoop] = useState("random");
  const [volume, setVolume] = useState(20);
  const [mute, setMute] = useState(false);
  const ref = (pl) => {
    setPlayer(pl);
  };
  const handleProgress = (progress) => {
    setDuration(player.getCurrentTime());
  };
  const handleChangeVolume = (value) =>{
      
      setVolume(value/100);
  }
  const onMute = ()=>{
    mute?setMute(false):setMute(true);
  }
    
  const url = linkMusic;
    const id = getId(url);
    const setStatus = () => {
    if (playing) setPlaying(false);
    else {
      setPlaying(true);
    }
  };
    const setRandomOrLoop = ()=>{
      if(randomLoop === "random") setRandomLoop("loop");
      else setRandomLoop("random")
    }
  return (
    <div className="musicPlayer">
      <ReactPlayer
        ref={ref}
        className="player-react"
        url={url}
        volume={volume}
        muted={mute}
        playing={playing}
        onProgress={handleProgress}
        onDuration={(duration) => {
          setTimeEnd(duration);
        }}
      />

      <ShowMusicPlayer
        maxValue={timeEnd}
        current={duration}
        url_thumbnail={`https://img.youtube.com/vi/${id}/0.jpg`}
        title_video={title}
        status={playing}
        handleStatus={setStatus}
        randomLoop={randomLoop}
        handleRandomOrLoop={setRandomOrLoop}
        handleChangeVolume={handleChangeVolume}
        onMute={onMute}
        mute={mute}
      />
    </div>
  );
}

export default Index;
