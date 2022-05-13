## Web app de videos utilizando la API de 
# YouTube 🙌

Esta aplicacion consta de tres componentes principales: la caja de busqueda, la visualizacion de resultados y la descripcion del detalle del video.

## Correr la aplicacion en local 

Ejecuta npm install para instalar las dependencias

```bash
npm install
```
Ejectutar el cliente

```bash
npm start
```

# Descripcion de lo realizado ✌

## Problema

Se solicitó realizar los tres componentes mencionados en la intro, donde se podría ingresar un video a buscar, al enviar el formulario debería navegar a los resultados de la busqueda, visualizando solo 4 videos, el principal que podrá reproducirse y 3 adicionales de los cuales se mostrará una mini imágen. Al clickear alguna de las mini imágenes el video correspondiente a la misma se cargará como video principal. El video principal posee un botón a la derecha de su título que permitirá entrar a los detalles del mismo.

## Solucion

Para el **cliente** de la aplicacion se utilizo ReactJs, junto con ReactRouter para las rutas dinamicas, el estado se manejo casi en su totalidad con el API Context para disponibilizarlo en toda el app, Proptypes para validar algunas props de componentes, y por ultimo SCSS para manejar los estilos.

* Cliente
  * React
  * ReactRouter
  * Context API
  * SASS

## Deploy 🚀

Puedes ver la aplicacion funcionando en produccion mediante este link: [CodDelSurApp](https://rubengonzalez-coddelsur-challenge.netlify.app/) .
Puedes ver ejemplo de los endpoints solicitados aqui:
 * [Busqueda de videos](https://rubengonzalez-coddelsur-challenge.netlify.app/video?search=animales%20divertidos)
 * [Detalle de un video](https://rubengonzalez-coddelsur-challenge.netlify.app/video/WHS8spYAcRc)
 
Gracias por leerme 🙏🏼. Que siga bien tu día.
Rubén 😉