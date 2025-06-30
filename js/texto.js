// texto.js

let dialogo = [];
let index = 0;
let escribiendo = false;

const caja = document.getElementById("dialogo");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");

function escribirTexto(texto, done) {
  let i = 0;
  escribiendo = true;
  caja.textContent = "";

  function escribir() {
    if (i < texto.length) {
      caja.textContent += texto.charAt(i++);
      setTimeout(escribir, 30);
    } else {
      escribiendo = false;
      if (done) done();
    }
  }

  escribir();
}

function mostrarSiguiente() {
  if (escribiendo) {
    // Si está escribiendo, muestra todo al instante
    escribiendo = false;
    return;
  }

  // Oculta botones si estaban visibles
  op1.style.display = "none";
  op2.style.display = "none";

  if (index >= dialogo.length) return;

  let linea = dialogo[index++];
  if (Array.isArray(linea)) {
    // Muestra decisiones
    op1.textContent = linea[0];
    op2.textContent = linea[1];
    op1.style.display = "inline-block";
    op2.style.display = "inline-block";
  } else {
    escribirTexto(linea);
  }
}

document.body.addEventListener("click", mostrarSiguiente);

op1.addEventListener("click", () => {
  location.href = "d/inicio.html";
});
op2.addEventListener("click", () => {
  location.href = "i/inicio.html";
});

fetch("dialogo.json")
  .then(res => res.json())
  .then(data => {
    dialogo = data.Dialogo;
    mostrarSiguiente();
  });

function activarPantallaCompleta() {
  const docElem = document.documentElement;
  if (docElem.requestFullscreen) {
    docElem.requestFullscreen();
  } else if (docElem.webkitRequestFullscreen) {
    docElem.webkitRequestFullscreen(); // Safari
  } else if (docElem.msRequestFullscreen) {
    docElem.msRequestFullscreen(); // IE
  }
}

function forzarHorizontal() {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape').catch(err => {
      console.warn("No se pudo forzar horizontal:", err);
    });
  }
}