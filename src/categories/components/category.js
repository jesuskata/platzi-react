import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css';

function Category (props) {
  return(
    <div className="Category">
      <p className="Category-description">{ props.description }</p>
      <h1 className="Category-title">{ props.title }</h1>
      <Playlist
        handleOpenModal={props.handleOpenModal}
        playlist={props.playlist}
      />
    </div>
  )
}

export default Category;