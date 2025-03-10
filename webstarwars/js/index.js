//Esta funcion es un formulario de validacion para iniciar sesion en la pagina de Star Wars
document.getElementById('loginButton').addEventListener('click', function() {
    //obtenemos el valor del usuario y de la contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // si el usuario es admin y la contraseña 1234, dejara entrar y pasara a mostrar la plantilla de peliculas
    if (username === 'admin' && password === '1234') {
        window.location.href = 'peliculas.html';
    } else { //si la contraseña no es correcta saltara una alerta de un error y te devolvera al index
        alert('Usuario o contraseña incorrectos');
        window.location.href = 'index.html';
    }
 });
 