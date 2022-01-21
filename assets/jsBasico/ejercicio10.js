let dia = prompt("Ingrese un dia a la semana").toLowerCase(); //convierte las palabras de minuscula a mayuscula

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "miércoles" || //al ser tildes se deben de comparar manualmente
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("entre semana");
} else {
  if (dia === "sabado" || dia === "sábado" || dia === "domingo") {
    alert("fin de semana");
  } else {
    alert("favor ingreso solo dias de la semana");
  }
}
