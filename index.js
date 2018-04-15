import React from 'react'; // react nos va a servir para crear nuestros componentes
import { render } from 'react-dom'; // react-dom nos ayuda a renderizar en el navegador
// como nota adicional, aquí también usamos el poder de ES6 para importar { render } y usarlo sin ReactDOM.render
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const app = document.getElementById('app')

// ReactDOM.render(qué voy a renderizar, dónde renderizar)
// const holaMundo = <h1>Hola Jesús Romero</h1>
render(<Playlist data={data} />, app); // < > se usa para que ReactDOM reconozca nuestro componente

// console.log("Hola mundo!");