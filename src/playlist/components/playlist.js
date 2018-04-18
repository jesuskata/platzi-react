import React from 'react';
import Categorias from './categorias';
import Media from './media';
import './playlist.css';
import Play from '../../icon/components/play';
import Pause from '../../icon/components/pause';
import Full from '../../icon/components/full-screen';
import Volume from '../../icon/components/volume';

function Playlist(props) { // en este caso estamos usando un componente funcional porque este no necesita ciclo de vida, sólo vamos a renderizar UI
  const playlist = props.data.categories;
  console.log(props.data);
  return (
    <div>
      {
        playlist.map((item) => {
          return(
            <div key={item.id} >
              <ul>
                <li><Play size={25} color="#053c5e" /></li>
                <li><Pause size={25} color="#053c5e" /></li>
                <li><Full size={25} color="#053c5e" /></li>
                <li><Volume size={25} color="#053c5e" /></li>
              </ul>
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