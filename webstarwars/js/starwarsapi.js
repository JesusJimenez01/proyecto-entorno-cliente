//Esta funcion obtiene el campo id de la url
function obtenerUrlId() {
  let p = new URLSearchParams(document.location.search)
  let id = p.get('id')
  return id;
 }
 
 
 function obtenerIdURLRecursoSWAPI(url) { //esta función coge la url de la API y valida (usando regex) y devuelve el número que hay al final (si existe)
  return Number(url.match(/([0-9]*)\/?$/)[1])
 }
 
 
 //acceder a la API
 async function obtenerDatosSWAPI(peticion) {
  const response = await fetch('https://swapi.dev/api/' + peticion);  //se llama a la api con la petición y se espera (await) a que responda
  return await response.json();  //esperar a que se convierta la respuesta en json y devolverla
 }
 
 
 //obtengo todas las películas
 async function obtenerPeliculas() {
  const response = await obtenerDatosSWAPI('films/');
  return response.results;
 }
 
 
 //obtengo una película solamente
 async function obtenerPelicula(id) {
  const response = await obtenerDatosSWAPI('films/' + id);
  return response;
 }
 
 
 //obtengo un personaje concreto
 async function obtenerPersonaje(id) {
  const response = await obtenerDatosSWAPI('people/' + id);
  return response;
 }
 
 
 //obtengo un planeta concreto
 async function obtenerPlaneta(id) {
  const response = await obtenerDatosSWAPI('planets/' + id);
  return response;
 }
 
 
 //obtengo una nave concreta
 async function obtenerNave(id) {
  const response = await obtenerDatosSWAPI('starships/' + id);
  return response;
 }
 
 
 //obtengo un vehiculo concreto
 async function obtenerVehiculo(id) {
  const response = await obtenerDatosSWAPI('vehicles/' + id);
  return response;
 }
 
 
 //obtener una especie en concreto
 async function obtenerEspecie(id) {
  const response = await obtenerDatosSWAPI('species/' + id);
  return response;
 }
 