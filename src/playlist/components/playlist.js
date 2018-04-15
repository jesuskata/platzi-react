import React, { Component } from 'react';
import Media from './media';
import './playlist.css';

class Playlist extends Component {
    render() {
        const playlist = this.props.data.categories[0].playlist;
        console.log(this.props.data);
        return (
            <div className="Playlist">
                {
                    playlist.map((item) => { // El método map() llama a la función proporcionada una vez para cada elemento en una matriz, en orden.
                        // return <Media title={item.title} key={item.id} /> // con esto, estamos llamando el título para Media según ES5
                        return <Media {...item} key={item.id} />
                    })
                }
            </div>
        )
    }
}

export default Playlist;