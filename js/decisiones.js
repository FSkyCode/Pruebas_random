// Guardar decisión
localStorage.setItem("decision_1", "ayudó");

// Leer decisión
let d1 = localStorage.getItem("decision_1");
console.log("En la escena 1, el jugador: " + d1);