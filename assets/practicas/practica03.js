/**
 * Vamos a tener un HTML vamos a tenmer los siguientes textos:
 * -Nombre :
 * -Edad :
 * -Direccion :
 * Telefono :
 * Docuemntos
 * -Vamos a tener un boton que diga (ingresar datos)
 * -Tenemos un prompt que pida la informacion
 */

 let ejecutar = document.getElementById("btnEjecutar");
 let nombreUsuario =document.getElementById("nombreUsuario");
 let edadUsuario =document.getElementById("edadUsuario");
 let direccionUsuario =document.getElementById("direccionUsuario");
 let telefonoUsuario =document.getElementById("telefonoUsuario");
 let documentoUsuario =document.getElementById("documentoUsuario");

 const cambiarNombre = () => {
   let nombre = prompt("Ingresa tu nombre");
   let edad = prompt("Ingresa tu edad");
   let direccion = prompt("Ingresa tu direccion");
   let telefono = prompt("Ingresa tu telefono");
   let documento = prompt("Ingresa tu documento");

   nombreUsuario.innerHTML = "Bienvenido/a " + nombre;
   edadUsuario.innerHTML = "Tu edad es: " + edad;
   direccionUsuario.innerHTML = "Tu direccion es: " + direccion;
   telefonoUsuario.innerHTML = "Tu telefono es: " + telefono;
   documentoUsuario.innerHTML = "Tu docuemnto es: " + documento;

   localStorage.setItem("nombre", nombre);
   localStorage.setItem("edad", edad);
   localStorage.setItem("direccion", direccion);
   localStorage.setItem("telefono", telefono);
   localStorage.setItem("documento", documento);
 };

 if (localStorage.getItem("nombre")) {
  nombreUsuario.innerHTML = "Bienvenido/a " + localStorage.
  getItem("nombre")
}

if (localStorage.getItem("edad")) {
  edadUsuario.innerHTML = "Tu edad es: " + localStorage.
  getItem("edad")
}

if (localStorage.getItem("direccion")) {
  direccionUsuario.innerHTML = "Tu direccion es: " + localStorage.
  getItem("direccion")
}

if (localStorage.getItem("telefono")) {
  telefonoUsuario.innerHTML = "Tu telefono es: " + localStorage.
  getItem("telefono")
}

if (localStorage.getItem("documento")) {
  documentoUsuario.innerHTML = "Tu documento es: " + localStorage.
  getItem("documento")
}

 //eventos
 ejecutar.onclick = () => {
   cambiarNombre();
 };