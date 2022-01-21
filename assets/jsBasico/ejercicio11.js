//DOM : Data Objetc Model: Permite manipular el thml desde javascript y desde CSS
let ejecutar = document.getElementById("btnEjecutar"); //Aqui estoy invocando al boton que esta en el thml

const cambiarNombre = () => { //Esta es una funcion
  let nombre = prompt("Ingresa tu nombre");
  alert("Tu nombre es: " + nombre); //Esta funcion pide un nombre y el alert lo va a mostrar
};
/** 
function name(params) {
}
Tambien se utiliza como funcion pero es recomendable usar la otra forma*/

//Eventos: Los eventos se recomiendadn siempre que vayan ala final, permiten ejecutar el boton, etc
ejecutar.onclick = () => {
  cambiarNombre();
};
