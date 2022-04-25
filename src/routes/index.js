import Header from "../template/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";


const routes = {

  '/': Home,
  '/:id': Character, 
  'error404': Error404
}

console.log(routes.error404)

const router = async () => {

  const content = null || document.querySelector('#content')
  const header = null || document.querySelector('#header')
  header.innerHTML = await Header()

  let hash = getHash()
  let route = await resolveRoutes(hash)
  

  //pasamos el valor de routes pero con lo que nos llegue después de toda la lógica, nos puede llegar por defecto estos valores '/', '/:id', que definimos en resolveRoutes, si no pasa por la validación nos pasa la ruta en si, y cada uno de los valores tiene un template como valor así que renderizaremos el template que coincida con lo que nos llegue de resolveRoutes, si no existe mostraremos el template de Error404
  let render = routes[route] ? routes[route] : Error404

  content.innerHTML = await render()
}

export default router;

