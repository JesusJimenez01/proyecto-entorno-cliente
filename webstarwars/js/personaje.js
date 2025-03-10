// Esta función genera la estructura para mostrar los datos de un personaje
function mostrarDatosPersonaje(personaje) {
  // Se crea el contenido con los datos del personaje
  html = "<h1>" + personaje.name + "</h1>";
  html += "<p>Altura: " + personaje.height + "</p>";
  html += "<p>Peso: " + personaje.mass + "</p>"; // Incluye altura, peso y otros detalles del personaje
  html += "<p>Color de pelo: " + personaje.hair_color + "</p>";
  html += "<p>Color de piel: " + personaje.skin_color + "</p>";
  html += "<p>Año de nacimiento: " + personaje.birth_year + "</p>";
  html += "<p>Género: " + personaje.gender + "</p>";
 
 
  // Se agrega una imagen de fondo del personaje basada en su nombre
  html += "<img src='imagenes/personajes/" + personaje.name + ".jpg' alt='" + personaje.name + "' class='background-img'>";
 
 
  // Elimina la animación de carga una vez que los datos están listos
  document.querySelector("#personaje .loading").remove();
 
 
  // Inserta el contenido HTML generado dentro del contenedor con id "personaje"
  document.querySelector("#personaje").insertAdjacentHTML('afterbegin', html);
 }
 
 
 // Función para añadir estilos CSS
 function añadirEstilosCSS() {
  // Se crea un nuevo elemento <style> en el documento
  const estilo = document.createElement('style');
 
 
  // Se define la clase CSS para la imagen de fondo
  estilo.innerHTML = `
      .background-img {
          width: 100%; /* La imagen ocupa todo el ancho */
          height: auto; /* Ajuste proporcional de altura */
          position: fixed; /* La imagen permanece fija en la pantalla */
          top: 0;
          left: 0;
          z-index: -1; /* Se coloca detrás del resto del contenido */
      }
  `;
 
 
  // Se añade la hoja de estilos al documento
  document.head.appendChild(estilo);
 }
 
 
 // Esta función obtiene los datos del personaje según su ID y los pasa a la función mostrarDatosPersonaje
 function datosPersonaje() {
  id = obtenerUrlId(); // Se obtiene el ID del personaje
  obtenerPersonaje(id) // Se hace una solicitud a la API para obtener los datos del personaje
      .then(personaje => mostrarDatosPersonaje(personaje)); // Una vez recibidos los datos, se muestran en la página
 }
 
 
 // Al cargar la página, se añaden los estilos CSS definidos en la función "añadirEstilosCSS"
 document.addEventListener('DOMContentLoaded', añadirEstilosCSS);
 
 
 // Se ejecuta la función para obtener y mostrar los datos del personaje al cargar la página
 datosPersonaje();
 