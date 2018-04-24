import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './categories.css';

function Category (props) {
  return(
    <div>
      <p className="Description">{ props.description }</p>
      <h1 className="Title">{ props.title }</h1>
      <Playlist
        playlist={props.playlist}
      />
    </div>
  )
}

export default Category;