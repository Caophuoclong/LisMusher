import React, { useState } from 'react';
import Search from "./search";
import MusicPlayer from "./musicPlayer"
function Index(props) {
  const {url} = props;
  const handleSearchSubmit = (data)=>{
    console.log(data);
  }
  return (
    <div className="main flex fl-col">
      <Search handleSearchSubmit={handleSearchSubmit}/>
      <MusicPlayer linkMusic={url}/>
    </div>
  );
}

export default Index;
