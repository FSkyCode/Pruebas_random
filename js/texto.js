// texto.js

function escribirTexto(texto, idElemento, velocidad = 40, callback = null) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = "";
  let i = 0;

  function escribir() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    } else if (callback) {
      callback();
    }
  }

  escribir();
}

// Para iniciar la escritura:
// escribirTexto("Hola, esto aparece letra por letra", "miDialogo");