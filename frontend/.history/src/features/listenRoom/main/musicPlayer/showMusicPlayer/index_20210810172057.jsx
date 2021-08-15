import React, { useState } from "react";
import ProgressBar from "../../../../../customComponent/react-progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faRandom,
  faShare,
  faStepBackward,
  faStepForward,
  faUndo,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
Index.propTypes = {};

function Index(props) {
  const {
    maxValue,
    current,
    url_thumbnail,
    title_video,
    status,
    handleStatus,
    randomLoop,
    handleRandomOrLoop,
    handleChangeVolume,
    mute,
    onMute,
    handleForward,
    handleBackward,
    handleShare,
  } = props;
  const [volumeValue, setvolumeValue] = useState(20);
  const convertToTime = (value) => {
    let minutes = Math.floor(value / 60);
    let seconds = Math.floor(value % 60);
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    return `${minutes}:${seconds}`;
  };
  const convertToPercent = (current, sum) => {
    return Math.floor((current / sum) * 100);
  };
  const onChangeValue = (e) => {
    handleChangeVolume(e.target.value);
    setvolumeValue(e.target.value);
  };
  document.querySelectorAll(".changeVolume").forEach((element) => {
    element.addEventListener("mouseover",()=>{
      document.body.scrolling = "no"
    })
  })
  document.querySelectorAll(".changeVolume").forEach((element) => {
    element.addEventListener("mouseout",()=>{
      document.body.scrolling = "yes"
    })
  })
  const handleChangeVolumeWheel = (e) => {
    let value = e.deltaY * -0.02;
    handleChangeVolume(parseInt(volumeValue) + value);
    setvolumeValue(parseInt(volumeValue) + value);
    console.log(volumeValue);
  };
  if(status){
    const img_thumbnail = document.getElementsByClassName("img_thumbnail");
    if(img_thumbnail[0] !== undefined){
      img_thumbnail[0].classList.add("spin");
    }
  }
  else{
    const img_thumbnail = document.getElementsByClassName("img_thumbnail");
    if(img_thumbnail[0] !== undefined){
      img_thumbnail[0].classList.remove("spin");
    }
  }
  return (
    <div className="showMusicPlayer">
      <div className="img_thumbnail"><img className="thumbnail-img" src={url_thumbnail} alt="" /></div>
      <p className="title-video">{title_video}</p>
      <div className="progress-bar">
        <span className="value maxValue">{convertToTime(current)}</span>
        <ProgressBar
          completed={convertToPercent(current, maxValue)}
          inProgress={convertToTime(current)}
          width="200px"
          labelSize="10px"
          labelColor="#fff"
        />
        <span className="value maxValue">{convertToTime(maxValue)}</span>
      </div>
      <div className="btn-function flex">
        {randomLoop === "random" ? (
          <FontAwesomeIcon
            className="icon-fn"
            onClick={handleRandomOrLoop}
            icon={faRandom}
            size="2x"
          />
        ) : (
          <FontAwesomeIcon
          className="icon-fn"

            onClick={handleRandomOrLoop}
            icon={faUndo}
            size="2x"
          />
        )}
        <FontAwesomeIcon onClick={handleBackward} className="icon-fn" icon={faStepBackward} size="2x" />
        {status ? (
          <FontAwesomeIcon
            className="icon-fn"
            onClick={handleStatus}
            icon={faPause}
            size="2x"
          />
        ) : (
          <FontAwesomeIcon
            className="icon-fn"
            onClick={handleStatus}
            icon={faPlay}
            size="2x"
          />
        )}
        <FontAwesomeIcon onClick={handleForward} className="icon-fn" icon={faStepForward} size="2x" />
        <div className="changeVolume" onWheel={handleChangeVolumeWheel}>
          {mute ? (
            <FontAwesomeIcon
              className="icon-fn"
              onClick={onMute}
              icon={faVolumeMute}
              size="2x"
            />
          ) : (
            <FontAwesomeIcon className="icon-fn" onClick={onMute} icon={faVolumeUp} size="2x" />
          )}
          <div className="volumeSlider">
            <span>0%</span>
            <input type="range" onChange={onChangeValue} value={volumeValue} />
            <p>100%</p>
          </div>
          
        </div>
        <FontAwesomeIcon onClick={handleShare} className="icon-fn" icon={faShare} size="2x" />
      </div>
    </div>
  );
}

export default Index;
