import React, { useEffect, useState } from 'react';
import User from "./user";
import ListRoom from "./list-room";
import { useDispatch, useSelector } from "react-redux";
import { setPlayingCurrent } from '../playingCurrentSlice';

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
        console.log(playing);
        document.querySelectorAll(".link__music").forEach((value,pos)=>{
            value.classList.remove("selected");
            value.removeAttribute("id");
            if(value.getAttribute("href") === playing){
                value.classList.add("selected");
                value.setAttribute("id","selected");
            }
        })
        document.getElementById("selected").scrollIntoView();



    },[playing])
    
    return (
        <div className="leftSide flex fl-col">
            <User/>
            <ListRoom handleSelect={handleSelect} />
        </div>
    );
}

export default Index;