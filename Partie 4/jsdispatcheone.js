// Mes variables sous forme de tableau
var bureaux = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13", "B14"];
var capaciteMaxBureau = [2, 4, 1, 1, 1, 3, 3, 1, 1, 1, 3, 2, 2, 2, 2];
var cartonBureau = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var nbCartons = 29;
var i;

//Remplir un bureau au max de sa capacité
function remplir(i) {
    for (cartonBureau[i] = 0; cartonBureau[i] < capaciteMaxBureau[i] && nbCartons > 0; nbCartons--, cartonBureau[i]++);
}

//Passer de bureau en bureau en les remplissant au max
for (i = 0; i < bureaux.length; i++) {
    remplir(i);
    console.log("Le bureau " + bureaux[i] + " contient " + cartonBureau[i] + " cartons.");
}

console.log(cartonBureau);