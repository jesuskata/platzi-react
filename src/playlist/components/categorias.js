import React, { Component } from 'react';
import './categorias.css';

class Categorias extends Component {
  render() {
    return(
      <div>
        <h2 className="title">{ this.props.title }</h2>
        <p className="description">{ this.props.description }</p>
      </div>
    )
  }
}

export default Categorias;