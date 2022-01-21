let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario =document.getElementById("nombreUsuario");

const cambiarNombre = () => { //Esta es una funcion
  let nombre = prompt("Ingresa tu nombre");
  nombreUsuario.innerHTML = "Bienvenido/a " + nombre;//Esto hace que me aparezca en el h1 lo que el usuario ingreso
};
/**
 * const cambiarNombre = () => { //Esta es una funcion
  let nombre = prompt("Ingresa tu nombre");
  nombreUsuario.innerHTML = nombreUsuario.innerHTML + nombre; asi se puede concatenar
  Abreviado: nombreUsuario.innerHTML += nombre;
};
 */

//eventos
ejecutar.onclick = () => {
  cambiarNombre();
};