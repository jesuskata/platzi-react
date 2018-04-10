import React, { Component } from 'react'; // gracias a ES6 podemos descomponer un objeto, trayendo el componente con {}
import PropTypes from 'prop-types';
import './media.css';

// Es hora de crear nuestro componente, y este puede ser de tres modos: funcional, puro y de estado
class Media extends Component { // aquí quitamos el React.Component, dejándolo solo en Component gracias a ES6
    render() {

        const { title, author, image } = this.props;
// hay dos formas de hacer props, esta, y la otra es eliminar el const y en cada propiedad usar {this.props.image}
// para entender un poco acerca de lo que se hizo aquí, se recomienda leer sobre object destructuring https://www.saltycrane.com/blog/2016/03/es6-features-used-react-development/
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid gray'
            }
        }
        return (
            <div className="Media">
                <div className="Media-cover">
                    <img className="Media-image"
                        src={image}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = { // para saber un poco más del uso de los propTypes lee https://reactjs.org/docs/typechecking-with-proptypes.html
    image: PropTypes.string,
    title: PropTypes.string.isRequired, // con esta opción isRequired, le decimos al programa que el título es requerido
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']) // Con esta opción, podemos declarar que el tipo de datos puede ser uno de 'tantos' tipos
}

export default Media;