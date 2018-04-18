import React from 'react';
import Categorias from './categorias';
import Media from './media';
import './playlist.css';

function Playlist(props) { // en este caso estamos usando un componente funcional porque este no necesita ciclo de vida, sólo vamos a renderizar UI
  const playlist = props.data.categories;
  console.log(props.data);
  return (
    <div>
      {
        playlist.map((item) => {
          return(
            <div key={item.id} >
              <Categorias {...item} />
              <div className="Playlist">
                {
                  item.playlist.map((item) => {
                    return <Media {...item} key={item.id} />
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Playlist;