import React, { Component } from 'react'; // gracias a ES6 podemos descomponer un objeto, trayendo el componente con {}

// Es hora de crear nuestro componente, y este puede ser de tres modos: funcional, puro y de estado
class Media extends Component { // aquí quitamos el React.Component, dejándolo solo en Component gracias a ES6
    render() {
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid gray'
            }
        }
        return (
            <div style={styles.container}>
                <div>
                    <img
                        src="./images/covers/bitcoin.jpg"
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3>¿Por qué aprender React?...</h3>
                    <p>JesusKata</p>
                </div>
            </div>
        )
    }
}

export default Media;