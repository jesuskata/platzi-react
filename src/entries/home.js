import React from 'react'; // react nos va a servir para crear nuestros componentes
import { render } from 'react-dom'; // react-dom nos ayuda a renderizar en el navegador
import Home from '../pages/containers/home';
import data from '../api.json';
// como nota adicional, aquí también usamos el poder de ES6 para importar { render } y usarlo sin ReactDOM.render
// import Playlist from './src/playlist/components/playlist';

const homeContainer = document.getElementById('home-container');

// ReactDOM.render(qué voy a renderizar, dónde renderizar)
// const holaMundo = <h1>Hola Jesús Romero</h1>
render(<Home data={data} />, homeContainer); // < > se usa para que ReactDOM reconozca nuestro componente

// console.log("Hola mundo!");