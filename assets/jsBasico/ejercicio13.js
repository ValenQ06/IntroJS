//localStorage: Guarda cosas en los navegadores o le añade cosas a los navegadores.
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario =document.getElementById("nombreUsuario");

const cambiarNombre = () => { //Esta es una funcion
  let nombre = prompt("Ingresa tu nombre");
  nombreUsuario.innerHTML = "Bienvenido/a " + nombre;
  localStorage.setItem("nombre", nombre);
};

if (localStorage.getItem("nombre")) {
    nombreUsuario.innerHTML = "Bienvenido/a " + localStorage.
    getItem("nombre")
}

//eventos
ejecutar.onclick = () => {
  cambiarNombre();
};