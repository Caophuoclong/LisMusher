import React, { useState } from "react";
import PropTypes from "prop-types";
import ProgressBar from "../../../../../customComponent/react-progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faRandom,
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
  return (
    <div className="showMusicPlayer">
      <img className="thumbnail-img" src={url_thumbnail} alt="" />
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
        <FontAwesomeIcon className="icon-fn" icon={faStepBackward} size="2x" />
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
        <FontAwesomeIcon className="icon-fn" icon={faStepForward} size="2x" />
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
      </div>
    </div>
  );
}

export default Index;
