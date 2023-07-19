let puntosUsuario = 0;
let puntosRival = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenerPuntosUsuario = document.querySelector("#puntos-jugador");
let contenerPuntosRival = document.querySelector("#puntos-rival");
let elegirTuEleccion = document.querySelector("#elegir-tu-eleccion")

let mensaje = document.querySelector("#mensaje");
let contenedorPunto = document.querySelector("#gana-ronda");
let contenedorEleccionUsuario = document.querySelector("#eleccion-jugador");
let contenedorEleccionRival = document.querySelector("#eleccion-rival");

let botonesEleccion = document.querySelectorAll(".arma");
botonesEleccion.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    let eleccionRival = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    // Piedra => 0
    // Tijera => 1
    // Papel => 2

    if (eleccionRival === 0) {
        eleccionRival = "piedra🪨";
    } else if (eleccionRival === 1) {
        eleccionRival = "tijera✂️";
    } else { eleccionRival = "papel📄" }

    // Piedra vence tijera
    // Tijera vence papel
    // Papel vence piedra
    // empates si son empates

    if (
        (eleccionUsuario === "piedra🪨" && eleccionRival === "tijera✂️") ||
        (eleccionUsuario === "tijera✂️" && eleccionRival === "papel📄") ||
        (eleccionUsuario === "papel📄" && eleccionRival === "piedra🪨")
    ) {
        ganaUsuario();
    } else if (
        (eleccionRival === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
        (eleccionRival === "tijera✂️" && eleccionUsuario === "papel📄") ||
        (eleccionRival === "papel📄" && eleccionUsuario === "piedra🪨")

    ) {
        ganaRival();

    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionRival.innerText = eleccionRival;

    if (puntosUsuario === 5 || puntosRival === 5) {
        if (puntosUsuario === 5) {
            instrucciones.innerText = "Ganaste el juego! 🏆"
        }

        if (puntosRival === 5) {
            instrucciones.innerText = "Perdiste el juego! 😭"
        }

        elegirTuEleccion.classList.add("disabled");
        reiniciar.classList.remove("disabled")
        reiniciar.addEventListener("click", reiniciarJuego)
    }

    console.log(eleccionUsuario);
    console.log(eleccionRival)
}

function ganaUsuario() {
    puntosUsuario++;
    contenerPuntosUsuario.innerText = puntosUsuario;
    contenedorPunto.innerText = "Ganaste este punto! 👍";
}

function ganaRival() {
    puntosRival++;
    contenerPuntosRival.innerText = puntosRival;
    contenedorPunto.innerText = "Perdiste este punto! 👎";
}

function empate() {
    contenedorPunto.innerText = "Oohhhh! Has empatado 🤔";
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elegirTuEleccion.classList.remove("disabled");
    mensaje.classList.add("disabled");
    puntosUsuario = 0;
    puntosRival = 0;

    contenerPuntosUsuario.innerText = puntosUsuario;
    contenerPuntosRival.innerText = puntosUsuario;

    instrucciones.innerText = "El mejor de 5 rondas"
}

