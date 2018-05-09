import React from 'react';
import Media from './media';
import './playlist.css';

function Playlist(props) { // en este caso estamos usando un componente funcional porque este no necesita ciclo de vida, sólo vamos a renderizar UI
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          return(
            <Media
            openModal={props.handleOpenModal}
            {...item}
            key={item.id} />
          )
        })
      }
    </div>
  )
}

export default Playlist;