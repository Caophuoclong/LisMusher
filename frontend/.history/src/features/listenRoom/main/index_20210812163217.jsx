import React, { useEffect } from 'react';
import searchWithKeyWord from "../../../components/searchYoutube";

import Search from "./search";
import MusicPlayer from "./musicPlayer"
import { setPlayingCurrent } from '../playingCurrentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { searchDatatResult } from '../searchResultSlice';
function Index(props) {
  const {url, socket} = props;
  const dispatch = useDispatch();  
  const playing = useSelector(state=> state.playing);
  useEffect(()=>{
    if(!playing){
      const href = JSON.parse(window.localStorage.getItem("current-song"));
      const action = setPlayingCurrent(href);
      dispatch(action)
    }
  },[])
  const handleSearchSubmit = async (data,e)=>{
    const keyword = data.search_input;
    const response = await searchWithKeyWord(keyword);
    const items = response.data.items;
    try{
    items.forEach(item=>{
      const id = item.id.videoId;
      const url = "https://www.youtube.com/watch?v="+id;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.medium.url;
      const info = {
        img_url: thumbnail,
        url,
        title
      }
      const actionAddSongToSearchResult = searchDatatResult(info);
      dispatch(actionAddSongToSearchResult);
    })
    if(e)
      e.target.reset();
    }
    catch(error){
      throw error;
    }

  }
  return (
    <div className="main flex fl-col">
      <Search onSearchSubmit={handleSearchSubmit} />
      <MusicPlayer linkMusic={url} socket={socket}/>
    </div>
  );
}

export default Index;
