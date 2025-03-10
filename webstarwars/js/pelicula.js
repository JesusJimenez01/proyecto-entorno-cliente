//Muestra los datos de la película en la parte superior (título y texto de apertura)
function mostrarDatosPelicula(pelicula) {
  html = "<h1>" + pelicula.title + " (episode " + pelicula.episode_id + ") </h1>"; //html título
  html += "<p>" + pelicula.opening_crawl + "</p>"; //opening (texto introducción)

  document.querySelector("#pelicula .loading").remove(); //remueve el gif cargando
  document.querySelector("#pelicula").insertAdjacentHTML('afterbegin', html) //insertar la posición del elemento
}

function datosPelicula() {
  id = obtenerUrlId();
  obtenerPelicula(id)
    .then(pelicula => mostrarDatosPelicula(pelicula)); // then (promesa)cuando se cumple 
}

datosPelicula();  //ejecuta la función datosPelícula. 


//*********** mostrar el listado de personajes */

function mostrarListadoPersonajes(personajes) {
  html = "<ul id='ulpersonajes'>";  //html es una lista vacía
  html += "</ul>";
  //básicamente, borra el contenido del cuadro listapersonajes
  document.querySelector("#listapersonajes .loading").remove();  //borra la imagen de carga
  document.querySelector("#listapersonajes").insertAdjacentHTML('beforeend', html);  //inserta código html (inserta una lista vacía) antes del final (before end) del cuadro de listapersonajes


  //y aquí va llenando la lista html con personajes de la película. Estos se van colocando dentro de html, que a su vez está dentro del cuadro listapersonajes
  personajes.forEach((urlPersonaje) => {            //   personajes.forEach(function(urlPersonaje) { ... }
    let idPersonaje = obtenerIdURLRecursoSWAPI(urlPersonaje);
    obtenerPersonaje(idPersonaje)  //llama a una función que obtiene los datos de un personaje
    .then(personaje => {  //.then(function(personaje) { ... }   //y luego con esos datos...
      html = `<li> &nbsp;<a href="personaje.html?id=${idPersonaje}">${personaje.name}</a>&nbsp; </li>`;  //crea un enlace a ese personaje a partir de su id
      document.querySelector("#ulpersonajes").insertAdjacentHTML('beforeend', html);  //y añade ese enlace
    })
  });
}

//coger una película, y obtiene el listado de personajes de esa película  
function listadoPersonajes() {
  id = obtenerUrlId(); //es el id de una película
  obtenerPelicula(id) //obtiene los datos de una película
    .then(pelicula => mostrarListadoPersonajes(pelicula.characters)); //y luego muestra los personajes de esa película
}

listadoPersonajes();

//*****************  ESTA PARTE DE AQUÍ NO ES FUNCIONAL (SALEN LOS LISTADOS PERO NO CADA PLANETA, NI CADA NAVE, ...) */

function mostrarListadoPlanetas(planetas) {
  html = "<ul id='ulplanetas'>";
  html += "</ul>";
  document.querySelector("#listaplanetas .loading").remove();
  document.querySelector("#listaplanetas").insertAdjacentHTML('beforeend', html);

  planetas.forEach((urlPlaneta) => {
    let idPlaneta = obtenerIdURLRecursoSWAPI(urlPlaneta);
    obtenerPlaneta(idPlaneta)
    .then(planeta => {
      html = `<li> &nbsp;<a href="planeta.html?id=${idPlaneta}">${planeta.name}</a>&nbsp; </li>`;
      document.querySelector("#ulplanetas").insertAdjacentHTML('beforeend', html);
    })
  });
}

function listadoPlanetas() {
  id = obtenerUrlId();
  obtenerPelicula(id)
    .then(pelicula => mostrarListadoPlanetas(pelicula.planets));
}

listadoPlanetas();

function mostrarListadoNaves(naves) {
  html = "<ul id='ulnaves'>";
  html += "</ul>";
  document.querySelector("#listanaves .loading").remove();
  document.querySelector("#listanaves").insertAdjacentHTML('beforeend', html);

  naves.forEach((urlNave) => {
    let idNave = obtenerIdURLRecursoSWAPI(urlNave);
    obtenerNave(idNave)
    .then(nave => {
      html = `<li> &nbsp;<a href="nave.html?id=${idNave}">${nave.name}</a>&nbsp; </li>`;
      document.querySelector("#ulnaves").insertAdjacentHTML('beforeend', html);
    })
  });
}

function listadoNaves() {
  id = obtenerUrlId();
  obtenerPelicula(id)
    .then(pelicula => mostrarListadoNaves(pelicula.starships));
}

listadoNaves();

function mostrarListadoVehiculos(vehiculos) {
  html = "<ul id='ulvehiculos'>";
  html += "</ul>";
  document.querySelector("#listavehiculos .loading").remove();
  document.querySelector("#listavehiculos").insertAdjacentHTML('beforeend', html);

  vehiculos.forEach((urlVehiculo) => {
    let idVehiculo = obtenerIdURLRecursoSWAPI(urlVehiculo);
    obtenerVehiculo(idVehiculo)
    .then(vehiculo => {
      html = `<li> &nbsp;<a href="vehiculo.html?id=${idVehiculo}">${vehiculo.name}</a>&nbsp; </li>`;
      document.querySelector("#ulvehiculos").insertAdjacentHTML('beforeend', html);
    })
  });
}

function listadoVehiculos() {
  id = obtenerUrlId();
  obtenerPelicula(id)
    .then(pelicula => mostrarListadoVehiculos(pelicula.vehicles));
}

listadoVehiculos();

function mostrarListadoEspecies(especies) {
  html = "<ul id='ulespecies'>";
  html += "</ul>";
  document.querySelector("#listaespecies .loading").remove();
  document.querySelector("#listaespecies").insertAdjacentHTML('beforeend', html);

  especies.forEach((urlEspecie) => {
    let idEspecie = obtenerIdURLRecursoSWAPI(urlEspecie);
    obtenerEspecie(idEspecie)
    .then(especie => {
      html = `<li> &nbsp;<a href="especie.html?id=${idEspecie}">${especie.name}</a>&nbsp; </li>`;
      document.querySelector("#ulespecies").insertAdjacentHTML('beforeend', html);
    })
  });
}

function listadoEspecies() {
  id = obtenerUrlId();
  obtenerPelicula(id)
    .then(pelicula => mostrarListadoEspecies(pelicula.species));
}

listadoEspecies();