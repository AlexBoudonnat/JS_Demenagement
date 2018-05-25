
var nbcartons = Number(prompt("Combien voulez-vous de cartons ?"));
var i;
var cartonElement;
var img;

for (i = 0; i < nbcartons; i++) {
    cartonElement = document.createElement("img");
    cartonElement.src = "images/carton-ferme.jpg";
    cartonElement.id = i;
    cartonElement.alt = "Carton fermé";
    cartonElement.setAttribute("onclick", "ouverture(this.id);");
    document.getElementById("new").appendChild(cartonElement);
}

function ouverture(idDeImage) {
    img = document.getElementById(idDeImage);
    if (img.src.match("images/carton-ferme.jpg")) {
        img.src = "images/carton-ouvert.jpg";
    }
    else if (img.src.match("images/carton-ouvert.jpg")) {
        img.src = "images/carton-ferme.jpg";
    }
}
