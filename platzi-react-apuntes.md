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