import React, { Component } from 'react';
import Categorias from './categorias';
import Media from './media';
import './playlist.css';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories;
    console.log(this.props.data);
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
}

export default Playlist;