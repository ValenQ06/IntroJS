// Forma correcta de declarar las funciones: flecha

let nombre = "pepito";

const nombreUsuario = () => {
    let nombre = prompt("Ingrese su nombre");
    alert("Tu nombre es: " + nombre);
    console.log("Tu nombre es: " + nombre); //Esto es para que se vea en la consola internamente
}

console.log(nombre);