/**
 * 1. por medio de un boton pedimos al usuario el nombre
 * 2. Despues del prompt del nombre aparecen mas promt.
 * 3 Van a pedir edad, direccion, documento, telefono
 * 4. En un alert concatenado el siguiente mensaje:
 * 5. Hola + nombre + tu edad es: + edad + tu direccion es : + direccion + tu numero telefonico es: + telefono + y tu docuemnto es: + docuemnto.
 */

const nombreUsuario = () =>{
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");
    let direccion = prompt("Ingrese su direccion");
    const documento = prompt("Ingrese su documento");
    let telefono = prompt("Ingrese su telefono");
    alert("Tu nombre es: "+nombre+" Tu edad es: "+edad+" Tu direccion es: "+direccion+"\n"+" Tu numero telefonico es: "+telefono+" Tu documento es: "+documento);
    console.log("Tu nombre es: "+nombre+" Tu edad es: "+edad+" Tu direccion es: "+direccion+"\n"+" Tu numero telefonico es: "+telefono+" Tu documento es: "+documento);
}