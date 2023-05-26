/* Calculadora de precios */

// Valor del ticket

let ticket = 200;

// Inputs

let categoria   = document.querySelector("#categoria");
let cantidad    = document.querySelector("#cantidad");

// Inserts

let precioTicket = document.querySelector("#precioTicket");
let resultado   = document.querySelector("#resultado");

// Botones
let btBorrar    = document.querySelector("#borrar");
let btResumen   = document.querySelector("#resumen");

// Formulario
let formulario  = document.querySelector("#formulario");


precioTicket.innerHTML = ticket;

let alertBorrado = () => alert("Formulario borrado");

function borrar() {
    formulario.reset();
    
    setTimeout(() => {
        alertBorrado(); 
    }, 1);
}

// Validación de descuento por categoria

function calcularDescuento() {
    let descuento;

    switch (categoria.value) {
        case "estudiante": descuento = 0.2;
        break;
    
        case "trainee": descuento = 0.5;
        break;
    
        case "junior": descuento = 0.85;
        break;
    
        default: descuento = 1;
        break;
    }

    return ticket*descuento;
}

// Calculo del total/resumen e inserción en HTML

function resumen (event) {
    event.preventDefault();

    let valorTicket = calcularDescuento();

    resultado.innerHTML = valorTicket*cantidad.value;
}


// Acciones de lo botones por eventos

btBorrar.addEventListener("click", borrar);

btResumen.addEventListener("click", resumen);