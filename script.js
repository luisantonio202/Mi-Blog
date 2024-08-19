let botonSaludo = document.getElementById("miBoton");

// Función que se ejecutará cuando se haga clic en el botón
function mostrarMensaje() {
  alert("Hola que tengas un buen dia!");
}

  // Agregar un event listener al botón para detectar el clic y ejecutar la función mostrarAlerta
  botonSaludo.addEventListener("click", mostrarMensaje);
