import React, { useEffect, useState } from 'react';
import Search from "./search";
import MusicPlayer from "./musicPlayer"
import { setPlayingCurrent } from '../playingCurrentSlice';
import { useDispatch, useSelector } from 'react-redux';
function Index(props) {
  const {url} = props;
  const dispatch = useDispatch();  
  const playing = useSelector(state=> state.playing);
  useEffect(()=>{
    if(!playing){
      const href = JSON.parse(window.localStorage.getItem("current-song"));
      const action = setPlayingCurrent(href);
      dispatch(action)
    }
  },[])
  const handleSearchSubmit = ()=>{

  }
  return (
    <div className="main flex fl-col">
      <Search onSearchSubmit={handleSearchSubmit} />
      <MusicPlayer linkMusic={url}/>
    </div>
  );
}

export default Index;
