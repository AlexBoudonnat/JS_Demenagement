// Mes variables sous forme de tableau
var bureaux = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13", "B14"];
var capaciteMaxBureau = [2, 4, 1, 1, 1, 3, 3, 1, 1, 1, 3, 2, 2, 2, 2];
var cartonBureau = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var nbCartons = 52;
var capacitemaxbatiment = 0;
var i;

// Permet de calculer la capacité max de tous les bureaux cumulée
for (i = 0; i < capaciteMaxBureau.length; i++) {
    capacitemaxbatiment = capacitemaxbatiment + capaciteMaxBureau[i];
}

console.log (capacitemaxbatiment);

// Mettre un carton dans chaque bureau qui n'a pas atteint sa capacité max
while (nbCartons > 0 && capacitemaxbatiment > 0) {
    for (i = 0; i < bureaux.length; i++) {
        if (cartonBureau[i] < capaciteMaxBureau[i]) {
            cartonBureau[i]++;
            nbCartons--;
            capacitemaxbatiment--;
            console.log("Le bureau " + bureaux[i] + " contient " + cartonBureau[i] + " cartons.");
        }
    }
}

console.log(cartonBureau);

console.log("Oh non, les cartons des bureaux B5 et B10 ont été inversés !!!");

while (cartonBureau[5] > 0) {
    cartonBureau[5]--;
    nbCartons++;
    console.log("Il reste " + cartonBureau[5] + " cartons dans le bureau B5.");
}
while (cartonBureau[10] > 0) {
    cartonBureau[5]++;
    cartonBureau[10]--;
    console.log("Il reste " + cartonBureau[10] + " cartons dans le bureau B10 et il y a " + cartonBureau[5] + " dans le bureau B5.");
}
while (cartonBureau[10] < capaciteMaxBureau[10]) {
    cartonBureau[10]++;
    nbCartons--;
    console.log("Il y a " + cartonBureau[10] + " dans le bureau B10.");
}