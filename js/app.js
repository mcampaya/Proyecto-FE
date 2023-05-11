// Menú hamburguesa

let coll     = document.querySelector(".collapsible");
let content  = document.querySelector("#nav-button");

coll.addEventListener("click", function() {
    let clase = content.classList;;
    if (content.getAttribute("class") === "ocultar") {
        clase.remove("ocultar");
    } else {
        clase.add("ocultar");
    }
});

