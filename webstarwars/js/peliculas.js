

//esta función es la que muestra la lista de películas.
function mostrarListadoPeliculas(peliculas) { 
  html = "<ul>"; //crea lista no ordenada
  peliculas.forEach((pelicula,index) => {  //Numera las películas
    index++;
    html += `<li>--> &nbsp;<a href="pelicula.html?id=${index}">${pelicula.title}</a>&nbsp; <--</li>`;  //aquí pone el título de la película en la lista
  });
  html += "</ul>";
  document.querySelector("#listapeliculas .loading").remove();  //esto borra la imagen que está dando vueltas
  document.querySelector("#listapeliculas").insertAdjacentHTML('afterbegin', html);  //esta parte pone la lista creada al principio del div listapeliculas
}


// obtiene las películas de la API y muestra sus títulos
function listaPeliculas() {
obtenerPeliculas()  //llama a la función que se conecta a la API y coge las películas que hay
.then(peliculas => mostrarListadoPeliculas(peliculas)); //llama a la función mostrarpelículas para mostrarlas
}


listaPeliculas();  //saca la lista de películas