// Funciones: Solo se funcionan cuando algo las llama, hay invocarlas
let nombre = "pepito"; //Aqui puedo poner nombre otra vez porque esta fuera de la variable

function nombreUsuario(params) {
    let nombre = prompt("Ingrese su nombre");
    alert("Tu nombre es: " + nombre); // Aqui estoy separando la variable por medio de una coma
    console.log("Tu nombre es: " + nombre);
}

console.log(nombre);

//nombreUsuario(); // Aqui estoy invocando la funcion para que se ejecute