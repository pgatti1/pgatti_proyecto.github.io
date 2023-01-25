/* Cambia clase en Body para moficar colores */

let btnVerde = document.getElementById("cambia_verde");
let btnRojo = document.getElementById("cambia_rojo");
let btnOriginal = document.getElementById("cambia_original");

let body = document.querySelector("body");

let color = "original"; //Clase por defecto

function removeColor(){
    return body.classList.remove(color);
}

function addColor(){
    return body.classList.add(color);
}

btnOriginal.addEventListener("click", function(){
    removeColor();
    color = "original";
    addColor();
});

btnRojo.addEventListener("click", function(){
    removeColor();
    color = "rojo";
    addColor();
});

btnVerde.addEventListener("click", function(){
    removeColor();
    color = "verde";
    addColor();
});


/* Contenedor con mensaje que emula tooltip de bootstrap */

let btnMessage = document.querySelector("#messageBtn");
let messageText = document.querySelector("#messageText");
let messageBox = document.querySelector("#messageBox");

btnMessage.addEventListener("mouseover", function(){
    messageText.innerHTML = "Hacé click en el botón 'Contactarme' para que te redirija al formulario de contacto.";
    messageBox.style.display = "inline-block";
});

btnMessage.addEventListener("mouseout", function(){
    messageBox.style.display = "none";
});


/* Mensaje de bienvenida y carga de datos */
let text;
let persona = prompt("Ingresá tu nombre:", "Un nombre");
text = "<span class='text-dark fw-bold'>" + persona + "</span>! Cómo estás?";

if (persona == "Un nombre"){
    document.getElementById("nombreVisitante").innerHTML = "!";
} else {
    document.getElementById("nombreVisitante").innerHTML = text;  
}


