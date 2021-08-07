import React, { useEffect, useState } from 'react';
import Search from "./search";
import MusicPlayer from "./musicPlayer"
import { setPlayingCurrent } from '../playingCurrentSlice';
import { useDispatch, useSelector } from 'react-redux';
import {addMusicLink} from "../musicListLinkSlice";
import { getId, getTitle } from '../../../components/inforYoutube';
import { addSong } from '../musicListInfoSlice';
function Index(props) {
  const {url} = props;
  const dispatch = useDispatch();

  const handleSearchSubmit = async (data,e)=>{
   const value = data.search_input;
    const action = addMusicLink(value);
    dispatch(action);
  
      const id = getId(value);
      const res = await getTitle(id);
      const title = res.data.items[0].snippet.title;
      const img_url = `https://img.youtube.com/vi/${id}/0.jpg`;
      const action1 = addSong({ url: value, img_url, title });
      dispatch(action1);
    e.target.reset();
  }
  const playing = useSelector(state=> state.playing);
  useEffect(()=>{
    if(!playing){
      const href = JSON.parse(window.localStorage.getItem("current-song"));
      const action = setPlayingCurrent(href);
      dispatch(action)
    }
      
  },[])
  return (
    <div className="main flex fl-col">
      <Search handleSearchSubmit={handleSearchSubmit}/>
      <MusicPlayer linkMusic={url}/>
    </div>
  );
}

export default Index;
