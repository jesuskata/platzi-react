import React, { PureComponent } from 'react'; // gracias a ES6 podemos descomponer un objeto, trayendo el componente con {}
import PropTypes from 'prop-types';
import './media.css';

// Es hora de crear nuestro componente, y este puede ser de tres modos: funcional, puro y de estado
class Media extends PureComponent { // aquí quitamos el React.Component, dejándolo solo en Component gracias a ES6
    state = { // ES7: de este modo se hace el cambio de estado
        author: 'JesusKata'
    }
    // esta es la forma de enlazar el evento del componente con la clase media que se renderiza en modo ES6
    // constructor(props) { // ES6: todas clase en javascript tienen este método y se autoejecuta cuando Media se renderea
    //     super(props);
    //     this.state = { // ES6: de este modo se hace el cambio de estado
    //         author: props.author
    //     }
    // //     this.handleClick = this.handleClick.bind(this);
    // // } // esto nos sirve para enlazar el handleClick del componente a la clase media, y de esta forma usarlo
    // // handleClick(event) {
    // //     console.log(this.props.title);
    // } // aquí se le está dando uso a lo hecho anteriormente, con el console.log podemos ver lo que definimos al dar click

    // esta es la forma de enlazar el evento del componente con la clase media que se renderiza en modo ES7
    // para ver más acerca de esto puedes entrar a https://reactjs.org/docs/handling-events.html
    handleClick = (event) => {
        this.props.openModal(this.props);
        // this.setState({
        //     author: 'EloisaKata'
        // }) // con este método cambiamos el estado del this por el que le digamos
        // console.log(this.props.title);
    }

    render() {

        // const { title, author, image } = this.props;
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
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image"
                        src={ this.props.cover } // cambiamos por cover, porque en la api.json la parte de la imagen se llama cover
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{ this.props.title }</h3>
                    <p className="Media-author">{ this.props.author }</p>
                    {/* regresamos a props el className */}
                </div>
            </div>
        )
    }
}

Media.propTypes = { // para saber un poco más del uso de los propTypes lee https://reactjs.org/docs/typechecking-with-proptypes.html
    cover: PropTypes.string, // cambiamos por cover, porque en la api.json la parte de la imagen se llama cover
    title: PropTypes.string.isRequired, // con esta opción isRequired, le decimos al programa que el título es requerido
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']) // Con esta opción, podemos declarar que el tipo de datos puede ser uno de 'tantos' tipos
}

export default Media;