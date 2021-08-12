import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getId } from "../../../../components/inforYoutube";
import ShowMusicPlayer from "./showMusicPlayer";
import { useSelector, useDispatch } from "react-redux";
import { setPlayingCurrent } from "../../playingCurrentSlice";
import { uri } from "../../../../axiosClient/apiAxiosClient";
Index.propTypes = {};

function Index(props) {
  const linkMusic = useSelector((state) => state.playing);
  const dispatch = useDispatch();
  const roomCurrent = useSelector((state) => state.roomCurrent);
  const [playing, setPlaying] = useState(false);
  const [player, setPlayer] = useState();
  const [duration, setDuration] = useState();
  const [timeEnd, setTimeEnd] = useState();
  const [title, setTitle] = useState();
  const [randomLoop, setRandomLoop] = useState("random");
  const [volume, setVolume] = useState(20);
  const [mute, setMute] = useState(false);
  const [loop, setLoop] = useState(false);
  const currentSong = JSON.parse(window.localStorage.getItem("current-song"));
  const [share, setShare] = useState(false);
  const [url, setUrl] = useState();
  const ref = (pl) => {
    setPlayer(pl);
  };
  const handleProgress = (progress) => {
    setDuration(player.getCurrentTime());
  };
  const handleChangeVolume = (value) => {
    setVolume(value / 100);
  };
  const onMute = () => {
    mute ? setMute(false) : setMute(true);
  };
  useEffect(() => {
    setUrl(linkMusic);
  }, [linkMusic]);
  useEffect(() => {
    setUrl(currentSong);
  }, [currentSong]);
  useEffect(()=>{

  },[])
  const id = getId(!url ? (!currentSong ? "" : currentSong) : url);
  const setStatus = () => {
    if (playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
      const action = setPlayingCurrent(currentSong);
      dispatch(action);
    }
  };
  const setRandomOrLoop = () => {
    if (randomLoop === "random") {
      setRandomLoop("loop");
      setLoop(true);
    } else {
      setRandomLoop("random");
      setLoop(false);
    }
  };
  const listLinkMusic = useSelector((state) => state.musicListLink);
  const handleForward = () => {
    let position = listLinkMusic.indexOf(currentSong);
    if (position < listLinkMusic.length - 1) {
      position += 1;
    } else {
      position = 0;
    }
    const nextSong = listLinkMusic[position];
    if (nextSong) {
      window.localStorage.setItem("current-song", JSON.stringify(nextSong));
      const action = setPlayingCurrent(nextSong);
      dispatch(action);
    }
  };
  const handleBackward = () => {
    let position = listLinkMusic.indexOf(currentSong);
    if (position <= 1) {
      position = listLinkMusic.length - 1;
    } else {
      position -= 1;
    }
    const previousSong = listLinkMusic[position];
    if (previousSong) {
      window.localStorage.setItem("current-song", JSON.stringify(previousSong));
      const action = setPlayingCurrent(previousSong);
      dispatch(action);
    }
  };
  const handleEnded = () => {
    handleForward();
  };
  const handleShare = () => {
    setShare(true);
  };
  return (
    <div className="musicPlayer">
      <ReactPlayer
        ref={ref}
        className="player-react"
        url={url}
        loop={loop}
        volume={volume}
        muted={mute}
        playing={playing}
        onProgress={handleProgress}
        onEnded={handleEnded}
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
        handleForward={handleForward}
        handleBackward={handleBackward}
        handleShare={handleShare}
      />
    </div>
  );
}

export default Index;
