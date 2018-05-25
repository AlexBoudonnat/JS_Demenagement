// Les variables du déménagement
var cartonsA = Number(prompt("Quel est le nombre de cartons à déménager ?"));
var cartonsB = 0;
var chargementCamion = 0;
var capaciteCamion = Number(prompt("quel est la capacité de votre camion ?"));

// Chargement du camion et trajet aller
function chargement() {
    while (chargementCamion < capaciteCamion && cartonsA > 0) {
        chargementCamion++;
        cartonsA--;
    }
    console.log("Le camion fait un voyage de " + chargementCamion + " cartons vers l'entrepôt B.");
}

// Déchargement du camion
function dechargement() {
    while (chargementCamion > 0) {
        chargementCamion--;
        cartonsB++;
    }

}

function demenagement() {
    while (cartonsA > 0) {
        chargement();
        dechargement();
        if (cartonsA >0) {
            console.log("Il y a " + cartonsB + " cartons dans l'entrepôt B et le camion retourne à vide à l'entreprôt A.");
        }
        else {
            console.log("La totalité des " + cartonsB + " cartons sont dans l'entrepôt B. \nOn ramène le camion chez le loueur.");
            console.log("Le déménagement est fini, on a bien mérité une petite mousse !");
        }
    }
}

demenagement();
