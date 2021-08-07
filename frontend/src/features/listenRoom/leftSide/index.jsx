import React, { useEffect, useState } from 'react';
import User from "./user";
import ListRoom from "./list-room";
import { useDispatch, useSelector } from "react-redux";
import { setPlayingCurrent } from '../playingCurrentSlice';
import AddYoutubeLink from './addYoutubeLink';
import { addMusicLink } from '../musicListLinkSlice';
import { getId, getTitle } from '../../../components/inforYoutube';
import { addSong } from '../musicListInfoSlice';

function Index(props) {
    const dispatch = useDispatch();
    const handleSelect = (e)=>{
        e.preventDefault();
        document.querySelectorAll(".link__music").forEach((value,pos)=>{
            value.classList.remove("selected");
        })
        const href = e.target.getAttribute('href');
       if(href !== null){
            e.target.classList.add('selected');
            window.localStorage.setItem("current-song",JSON.stringify(href))
            dispatch(setPlayingCurrent(href))
       }
    }
    const playing = useSelector(state=>state.playing);
    useEffect(()=>{
        document.querySelectorAll(".link__music").forEach((value,pos)=>{
            value.classList.remove("selected");
            value.removeAttribute("id");
            if(value.getAttribute("href") === playing){
                value.classList.add("selected");
                value.setAttribute("id","selected");
            }
        })
        const selectedElement = document.getElementById("selected");
        if(selectedElement)
            selectedElement.scrollIntoView();
    },[playing])
    const musicListLink = useSelector(state=>state.musicListLink);
    const handleAddSubmit = async (data,e)=>{
        const value = data.add_link_input;
        console.log(value);
        console.log(musicListLink.includes(value));
        if(!musicListLink.includes(value)){
         const action = addMusicLink(value);
         dispatch(action);
         try{
           const id = getId(value);
           const res = await getTitle(id);
           const title = res.data.items[0].snippet.title;
           const img_url = `https://img.youtube.com/vi/${id}/0.jpg`;
           const action1 = addSong({ url: value, img_url, title });
           dispatch(action1);
         } catch(error){
           console.log(error);
         }
         e.target.reset();
        }
        else{
          alert("Bai hat da ton tai");
        }
         
           
       }
    
    return (
        <div className="leftSide flex fl-col">
            <User/>
            <ListRoom handleSelect={handleSelect} />
            <AddYoutubeLink onAddSubmit={handleAddSubmit}/>
        </div>
    );
}

export default Index;