// Función que se ejecutará cuando se haga clic en el botón
function mostrarMensaje() {
  alert("Hola que tengas un buen dia!");
}

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón por su ID
  var boton = document.getElementById("miBoton");

  // Agregar un event listener al botón para detectar el clic y ejecutar la función mostrarAlerta
  boton.addEventListener("click", mostrarMensaje);
});
