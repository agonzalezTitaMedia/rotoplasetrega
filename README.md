--+

# Bolerplate from vtex

Boler plata para proyectos vtex basado en webpack con gestor de modulos es6, y soporte para sass

## Características

* Usa webpack
* Esta basado en Sass y ES6.
* Compila Sass con autoprefixer y muestra los cambios en tiempo real
* Compila ES6 con soporte para módulos ES6 (importar y exportar modulos)
* Captura errores en Sass, y Js evitando que webpack se detenga.
* Crea los sourcemaps de los archivos compilados
* Tiene una estructura lista de estilos (con Sass) basada en SMACSS y ITCSS
* Tiene una estructura lista para importar y exportar modulos ES6

## Modo de uso

1. Clone este repositorio
2. Ejecute el comando npm install webpack webpack-cli -G
3. Ejecute `npm install` (asegurese de tener npm actualizado y Nodejs en v12 como minimo)
4. Para ejecutar el modo desarrollo ejecute npm start
5. una vez terminado y quiera publicar ejecute npm run build para que se produscan los archivos de desarrollo
## Estructura

1. La carpeta src contiene la estructura de archivos con la que trabajará
2. La carpeta public contiene los archivos compilados que deberan llevarse a producción
3. Para Sass importe sus partials desde `styles.scss`, el orden está indicado en el mismo archivo
4. Tiene incluido fundation como dependecia, en `styles.scss` se esta llamando solamente el xgrid y los estilos basicos del framework, para hablitarlos vaya a la carpeta scss/framework/_fundation.scss y descomente cada modulo del framework que quiera importar.
5. Para Js, la carpeta `modules` contiene los módulos que serán importados desde `index.js`