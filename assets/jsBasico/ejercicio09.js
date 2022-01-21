// El swith no lleva una condicion si no un key, que es la variable que yo voy a utilizar para hacer las conficiones.
let ciudad = prompt ("Ingresa tu ciudad");

switch (ciudad) {
    case "bogota":
        alert("clima frio");
        break;
        case "armenia":
    default:
        alert("clima templado");
        break;
    default:
        alert("no ingreso una ciudad valida");
        break;
}

if (ciudad === "bogota" || ciudad === "Pasto") {
    alert("clima frio");
} else {
    if (ciudad === "armenia" || ciudad === "medellin") {
        alert("clima templado");
    } else {
        alert("no ingreso una ciudad valida");
    }
}