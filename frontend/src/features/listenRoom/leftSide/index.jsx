import React, { useEffect, useState } from 'react';
import User from "./user";
import ListRoom from "./list-room";

function Index(props) {
    const {getLink} = props;
    const handleSelect = (e)=>{
        e.preventDefault();
        document.querySelectorAll(".link__music").forEach((value,pos)=>{
            value.classList.remove("selected");
        })
        const href = e.target.getAttribute('href');
       if(href !== null){
            e.target.classList.add('selected');
            getLink(href)
       }
    }
    
    
    return (
        <div className="leftSide flex fl-col">
            <User/>
            <ListRoom handleSelect={handleSelect} />
        </div>
    );
}

export default Index;