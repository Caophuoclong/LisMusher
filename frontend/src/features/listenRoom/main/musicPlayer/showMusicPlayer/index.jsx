import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../../../../../customComponent/react-progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";
Index.propTypes = {};

function Index(props) {
  const {
    handlePlayingStart,
    handlePlayingStop,
    maxValue,
    current,
    url_thumbnail,
    title_video,
    status,
    handleStatus,
  } = props;
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
  console.log(convertToTime(current));
  return (
    <div className="showMusicPlayer">
      <img className="thumbnail-img" src={url_thumbnail} alt="" />
      <p className="title-video">{title_video}</p>
      <div className="progress-bar">
      <span className="value maxValue">00:00</span>
        <ProgressBar
          completed={convertToPercent(current, maxValue)}
          inProgress={convertToTime(current)}
          width="200px"
          labelSize="10px"
          labelColor="#fff"
        />
        <span className="value maxValue">{convertToTime(maxValue)}</span>
      </div>
      <div className="btn-function">
        <FontAwesomeIcon icon={faStepBackward} size="2x" />
        {status ? (
          <FontAwesomeIcon onClick={handleStatus} icon={faPause} size="2x" />
        ) : (
          <FontAwesomeIcon onClick={handleStatus} icon={faPlay} size="2x" />
        )}
        <FontAwesomeIcon icon={faStepForward} size="2x" />
      </div>
    </div>
  );
}

export default Index;
