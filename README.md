# Sports


## Estructura de las carpetas y archivos

La api-restFull está hecha como proyecto final del segundo trimestre del grado de desarrollador de aplicaciones multiplaforma, con el fin demostrar todos los conocimientos adquiridos durante el segundo año del mismo.

La proyecto sirve para organizar quedadas para jugar a distintos deportes con amigos.

Dentro del proyecto encontrarás dos directorios [backend](https://github.com/CAMPUSCAMARAFP2021/proyecto_fina_lucia/tree/master/backend) y [react](https://github.com/CAMPUSCAMARAFP2021/proyecto_final_lucia/tree/master/react), el primero contiene lo necesario poder realizar todas las conexiones necesarias a la base de datos([mongoDB](https://www.mongodb.com/es/what-is-mongodb)) y las necesarias [peticiones HTTP](https://yosoy.dev/peticiones-http-get-post-put-delete-etc/),a su vez que la creacion y eliminacion de los distintos objectos necesarios y las rutas con las que interactuaremos más adelante, para el correcto funcionamiento del proyecto, mientras que la segunda carpeta muestra mediante la interfaz creada el resultado de las conexiones,rutas y peticiones.

El uso de la carpeta `node_modules` está omitido por el momento.

## Instalación

#### Requerimientos

- [Docker](https://www.docker.com/products/docker-desktop).
- Editor de codigo como [Visual Studio Code](https://code.visualstudio.com/Download).
- Git.
- Node JS 10+.
- React.
- React-bootstrap.
- Express-generator.
- Mongoose.
- Nodemon.
- Cors.
- [WSL](https://docs.microsoft.com/es-es/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package) v2 con Ubuntu.
- Terminal como Cmder, CMD, etc.
- [Postman](https://www.postman.com/downloads/) (Testing).

#### Get Started
1. Habilitar el `WSL` en el equipo donde se vaya a ejecutar el programa y una vez habilitado el '`WSL` instalar la [Distribucion de linux](https://computerhoy.com/noticias/software/que-es-distribucion-linux-que-diferencian-como-elegir-54784) preferida, en ese caso `Ubuntu`.
2. Arrancar `docker`, mediante el programa `docker desktop`.
3. Dentro de `Visual Studio Code` debes instalar las extensiones de `docker`,`Remote - Containers`,`Remote - SSH`,`Remote - WSL`,
`Remote - Development`.
4. Utilizar el comando `git clone` en `Visual Studio Code` para clonar el repositorio en el directorio que apunte su terminal.
5. En la terminal entras al backend con el comando docker-compose run backend bash
6. Dentro del mismo [backend](https://github.com/CAMPUSCAMARAFP2021/ProyectoDavidAPI/tree/master/backend), ejecutar el comando `npm install`, esto hará que las dependencias se instalen, despues así pueda funcionar el proyecto;, es importante tenerlas ya que sin ella el proyecto no correrá correctamente.
7. Comando exit para salir y volver al proyecto
8. En la terminal entras al backend con el comando docker-compose run rect bash
9. Dentro del directorio [react](https://github.com/CAMPUSCAMARAFP2021/ProyectoDavidAPI/tree/master/react), ejecutar el comando `npm install` en la raíz, esto hará que las dependencias se instalen, despues así pueda funcionar el proyecto;, es importante tenerlas ya que sin ella el proyecto no correrá correctamente.
10. Comando exit para salir y volver al proyecto
11. Por ultimo levantaremos el proyecto usando la terminal, dirigiéndonos al directorio `proyecto_final_lucia` y ejecutando el siguiente comando `docker-compose up`
12. Si todo salió bien, la terminal  mostrará un mensaje indicándonos que la api está trabajando bajo el puerto 3000 y la base de datos ha sido conectada.
13. Y podramos ver la pagina en el navegador poniendo 'localhost:4201' 
14. Ya podremos utilizar la web

## Uso de la API

Para usar la API se debe de utilizar POSTMAN, para ingresar la ruta y el método HTTP por el cuál ejecutaremos nuestras peticiones para hacer testing, una vez ya hayamos terminado de hacer testing desde el navegador podremos usar la API.

#### Seleccionar todas las pelotas:

**_GET_** http://localhost:3000/balls

#### Seleccionar todas los jugadores:

**_GET_** http://localhost:3000/player

#### Seleccionar todas las quedadas:

**_GET_** http://localhost:3000/meet

...etc

Hecho por Lucia Calabrese Maffei.
Salva: apoyo general
