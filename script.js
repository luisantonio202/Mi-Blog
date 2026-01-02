let botonSaludo = document.getElementById("botonMsj");

// Función que se ejecutará cuando se haga clic en el botón
function mostrarMensaje() {
  alert("Hola que tengas un buen dia!");
}

  // Agregar un event listener al botón para detectar el clic y ejecutar la función mostrarAlerta
  botonSaludo.addEventListener("click", mostrarMensaje);

document.getElementById("boton-inicio").addEventListener("click", function() {
    window.location.href = "https://luisantonio202.github.io/Mi-Blog/";
});

document.getElementById("boton-notas").addEventListener("click", function() {
  window.location.href = "https://luisantonio202.github.io/Mi-Blog-2/";
});

document.getElementById("boton-proyectos").addEventListener("click", function() {
  window.location.href = "https://luisantonio202.github.io/Mi-Blog-3/";
});
