function cartonOuvert(idImage) {
    var img = document.getElementById(idImage);
    if (img.src.match("images/carton-ferme.jpg")) {
        img.src = "images/carton-ouvert.jpg";
    }
    else if (img.src.match("images/carton-ouvert.jpg")) {
        img.src = "images/carton-ferme.jpg";
    }
}
