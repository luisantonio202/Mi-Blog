let botonSaludo = document.getElementById("botonMsj");
let contenedor = document.getElementById("contenedor-uno");
let mensajeCreado = false;

function mostrarMensaje() {
  if (!mensajeCreado) {
    let saludo = document.createElement('p');
    saludo.textContent = 'Hola excelente dia😊';
    saludo.style.backgroundColor = 'orange';
    saludo.style.borderStyle = 'solid';
    saludo.style.fontFamily = 'Arial';
    saludo.style.fontSize = '20px';
    saludo.style.padding = '10px';
    
    contenedor.appendChild(saludo);
    mensajeCreado = true;
  }
}


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
