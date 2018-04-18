# Curso de ReactJS de Platzi

### 3 de los puntos importantes de ReactJS

1. Declartivo: lo que lo hace fácil de usar y leer
2. Basado en componentes: es como jugar a los _Legos_
3. Uso de componentes: aprende una vez, escribe donde quieras

### Complementos de ReactJS

Al ser una librería, se encarga de hacer una sola cosa, para lo demás tenemos los siguientes complementos:

+ ReactJS: aprende el core, el corazón de la librería
+ React router. Navegar sin recargar el browser.
+ Redux. Manejar el estado global de la aplicación.
+ React Native. Interfaces de aplicaciones mobiles.
+ Next.js. Framework en el servidor.

### Iniciamos nuestro proyecto en ReactJS

Es necesario tener ciertos programas preinstalados en nuestra máquina para poder iniciar con un poryecto de ReactJS

1. NodeJS, lo podemos instalar desde su sitio oficial [NodeJS](https://nodejs.org/es/)

Una vez instalado NodeJS en nuestra máquina, podemos encontrar la guía de instalación de un poryecto react en [Facebook](https://github.com/facebook/create-react-app), donde seguimos los pasos sugeridos

__NOTA!__ NodeJs en Windows con Bash Shell, debe ser instalado siguiendo las siguientes instrucciones [NodeJs Ubuntu on Windows 10](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

2. Una vez teniendo todo lo anterior, es momento de dirigirnos a nuestro directorio donde queremos nuestra app, y ahí (según las instrucciones del Github de Facebook) escribimos lo siguiente:

        npx create-react-app my-app
        cd my-app
        npm start

2. En la forma anterior, creamos un proyecto de manera automática con todas la dependencias básicas que requiere un poryecto de ReactJs de cero. Ahora, con el modo que veremos ahora, vamos a crear un poryecto de cero pero con una configuración personalizada, donde tengamos el control de todo el proceso de instalación.

+ Primero creamos dos archivos, basados en los siguientes links: [webpack.dev.config.js](https://github.com/LeonidasEsteban/webpack-curso/blob/master/invie/webpack.dev.config.js) y [webpack.config.js](https://github.com/LeonidasEsteban/webpack-curso/blob/master/invie/webpack.config.js) en nuestra carpeta de proyecto.

+ Ahora, desde la _Terminal_, ingresamos a nuestra carpeta de proyecto y damos inicio a nuestro _package.json_ siguiendo las instruciones que el comando nos inidique

        npm init

+ Ahora para completar la instalación de las dependencias, es necesario revisar el archivo _package_ que se encuentra en [package.json](https://github.com/LeonidasEsteban/webpack-curso/blob/master/invie/package.json) y así incluir la instalación de las dependencias adicionales que vamos a necesitar en el proyecto de ReactJS.

+ Del archivo mencionado, copiamos las sección completa de _devdependencies_ a nuestro _package.json_ al final del archivo (antes del cierre '}')

+ Quitar a todas las dependencias en la sección de versión su '^'

+ Ahora, dentro del _webpack.config.js_ hacemos el cambio del nombre del proyecto y la dirección que deseamos compilar, de la siguiente manera:

        <!-- entry: { -->
            "platzi-video": path.resolve(__dirname, 'index.js'),
        <!-- }, -->

+ De la misma manera con el archivo _webpack.dev.config.js_ hacemos lo mismo después del _entry_:

        <!-- entry: { -->
            "platzi-video": path.resolve(__dirname, 'index.js'),
        <!-- }, -->

+ Ahora, vamos a agregar los scripts en el _package.json_ que se van a necesitar adicionales, desde la dirección [package.json](https://github.com/LeonidasEsteban/webpack-curso/blob/master/invie/package.json) y los copiamos a nuestro _package.json_

+ __NOTA!__ Hace falta incluir una dependencia de desarrollo adicional en el _package.json_:

        "babel-preset-stage-2": "6.24.1",

+ Ya que tenemos todas las dependencias en su lugar, corresponde dar la instrucción para instalarlas desde la terminar, estando en la carpeta del proyecto

        npm install

+ Corremos nuestro proyecto con la siguiente línea de código:

        npm run build:prod

+ Creamos un _index.html_ básico al cuál le agregamos un _script_ que nos dirija al archivo que se creó para desarrollo:

        <script src="dist/js/platzi-video.20338c25df46c154f1ab.js"></script>

3. Ahora, es necesario que instalemos _react_ y _react-dom_ a nuestro _package.json_, en la Terminal, colocamos la siguiente línea de comando:

        npm install react react-dom --save

Eliminamos su '^' en la sección de versión.

+ En nuestro archivo index.js creamos lo siguiente:

        import React from 'react'; // react nos va a servir para crear nuestros componentes
        import ReactDOM from 'react-dom'; // react-dom nos ayuda a renderizar en el navegador

        const app = document.getElementById('app')

        const holaMundo = <h1>Hola mundo</h1>
        ReactDOM.render(holaMundo, app);

+ Ahora a nuestro archivo _index.html_ le agregamos lo siguiente en el _body_

        <div id="app"></div>

+ En la terminal, desde la carpeta de nuestro proyecto, volvemos a ejecutar el comando:

        npm run build:prod

Cambiamos el hash que nos ha creado en el index.html

__NOTA!__ Hemos estado usando nuestra configuración en el modo producción (webpack.config.js), para que podamos trabajar libremente sin necesidad de hacer todo lo anterior una y otra vez, vamos a lanzar nuestro proyecto en modo desarrollo (webpack.dev.config.js), con la siguiente línea de comando:

        npm run build:dev

Pero ahora, es necesario hacer un cambio importante, en el _index.html_ vamos a cambiar la línea anterior de _script_ y vamos a colocar lo siguiente:

        <script src="http://localhost:9000/js/platzi-video.js"></script>

+ Otra dependencia importante para instalar es la _prop-types_

        npm install prop-types --save

### Props y States en ReactJS

+ Las props son inmutables, no pueden cambiar
+ Los states si tienen la capacidad de cambiar

### Ciclos de vida de un componente

Se divide en 3 partes: montado, actualización, desmontado y manejo de errores (a partir de ReactJS 16)

#### Montado
Tenemos varios métodos que podemos manejar al momento de crear un componente en React. Este sucede cuando vamos a renderizar un componente (cuando este entra en escena dentro de la aplicación)

+ constructor(): este método se llama antes de que el componente sea montado (osea, el componente aún no se ve)

    + Podemos iniciar estado
    + Enlazar bind() de eventos
    + Es el primer método que se llama al instanciar un componente

> En sí, lo único que se recomienda es poner estado inicial o hacer bind en el constructor()

+ componentWillMount(): método llamado inmediatamente antes de que el componente se vaya a montar (el componente aún no se ve)

    + Podemos hacer un setState()
    + No hacer llamados a un API o suscripción a eventos

+ render(): contiene todos los elementos a renderizar (osea, la estructura del componente)

    + Contiene _jsx_ en el return
    + Podemos calcular propiedades, por ejemplo: concatenar una cadena

            nCompleto = name + lastName;

+ componentDidMount(): método llamado luego de montarse un componente (el componente ya está en la pantalla)

    + Solo se lanza una vez
    + Se pueden enlazar (bind) de eventos
    + Es el primer método que se llama al instanciar un componente
    + Ideal para llamar una API o hacer un setInterval()

#### Actualización

En caso que nuestro componente vaya a recibir nuevos datos

+ componentWillReceiveProps: este es el método que va a recibir las nuevas propiedades de mi componente

    + En esta parte podemos validar las propiedades que teníamos antes con las nuevas
    + Sirve para actualizar el estado con base en las nuevas propiedades

+ shouldComponentUpdate(): es importantísimo para mejorar el rendimiento de nuestra app

    + Se valida si realmente es necesario re-renderear la app, haciendo una comparación de los cambios hechos
    + Método que condiciona si el componente se debe volver a renderear

+ componentWillUpdate(): este componente se ejecuta si pasó el shouldComponentUpdate() con un true

    + También se pasa a esta sección en caso que no se use el shouldComponentUpdate()
    + Método utilizado antes de re-renderizar un componente
    + Se utiliza para optimizar el rendimiento

+ render()

    + re-render

+ componenteDidUpdate(): método llamado luego del re-render

#### Desmontado

Cómo nuestro componente se va de la escena

+ componenteWillUnmount(): método llamado antes de que el componente sea retirado de la aplicación

    + Un ejemplo de esto es en un reproductor con el botón de play y pausa

#### Manejo de errores

A partir de ReactJS 16 tenemos el manejo de errores y nos ayuda a prevenir que nuestra aplicación de rompa en caso que algún componente tenga algún problema

+ componentDidCatch(): si ocurre algún error al renderizar el componente, este método es invocado

    + El manejo de errores solo ocurre en componentes hijos

### Listas en ReactJS

Las listas son una serie de arreglos en React, que pueden ser usadas desde una API o una base de datos.

+ map(): es un método de javascript que nos ayuda a mapear los elementos de una lista o arreglo. En el ejemplo de nuestro proyecto, por cada elemento de _playlist_, nos devuelve un elemento de _media_
    + Dentro de map tenemos una función que contendrá un parámetro que nos indicará el elemento que deseamos presentar en todas sus versiones o elementos
+ spread operator: es un operador de propagación y permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales). Para mayor información [spread operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator)

### Componentes puros y funcionales en ReactJS

Recordemos que existen tres tipo de componentes en React (clásicos, puros y funcionales). Hemos estado usando hasta ahora los componentes clásicos de React, pero hay otras dos formas de hacer componentes:

+ Puros: estos componentes llevan incluido (del ciclo de vida de los componentes) el shouldComponentUpdate(). Quiere decir que si al componente no se le actualizan las propiedades, no hará re-render()
+ Funcionales: estos tienen este nombre precisamente por que son funciones. Son más fáciles de escribir, de probar y de utilizar. Además, no tiene ciclo de vida, porque no hay forma de poner los métodos de los ciclos de vida de los componentes. Un ejemplo de su forma es:

```javascript
function Playlist(props) {
    return (
        <div>
            {props}
        </div>
    )
}
```

> Los componentes funcionales, al no tener ciclo de vida, son menos eficientes a la hora de controlar su reactividad y el re-renderizado.

> Por cierto, las funciones puras … en el enfoque de la Programación Funcional son aquellas funciones que única y exclusivamente existen para retornar un valor (y no hacer otra cosa), a partir de sus parámetro de entrada …

> Así que de alguna manera, los componentes funcionales, son a la vez que componentes, también funciones puras

### Smart components y Dumb components

La pregunta a contestar después de ver lo anterior, es "¿En qué momento uso cada tipo de componente?", para ello la respuesta más básica que lo explica es: "Cómo se ve __VS__ Qué hace"

+ Dumb component (Presentacional): Cómo se ve

    + Puede contener smart components u otros componentes de UI
    + Permiten composición con ```[props.children]```
    + No depeden del resto de la aplicación
    + No especifica cómo los datos son cargados o mutados
    + Recibe datos y callbacks solo con propiedades
    + Rara vez tienen su propio estado
    + Están escritos como componentes funcionales a menos que necesiten mejoras de performance. Sólo pueden ser _Componentes funcionales_ o _Componentes Pure_

+ Smart component (Containers): Qué hace

    + Concetrado en el funcionamiento de la aplicación (van a tener tod un ciclo de vida)
    + Contienen componentes de UI u otros containers
    + No tienen estilos
    + Proveen de datos a componentes de UI u otros contenedores
    + Proveen de callbacks a la UI
    + Normalmente _tienen estado_
    + Llaman acciones
    + Generados por higher order components

+ ¿Por qué es importante separalos en Dumb y Smart?

    + Separación de responsabilidades: Cómo se ve __VS__ Qué hace
    + Mejora la capacidad de reutilizar componentes