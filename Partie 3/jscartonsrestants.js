// Mes variables :
var cartonsmax = Number(prompt("Nombre max de cartons à déménager :"));
var cartonsmin = 1;
var cartonsrestants = Math.round(cartonsmax * Math.random() + cartonsmin);
var proposition = Number(prompt("Proposez un nombre entre 1 et " + cartonsmax + " :"));

console.log(cartonsrestants);
// Tant que ma proposition est éronnée :
while (proposition !== cartonsrestants) {
    if (proposition < cartonsrestants) {
        console.log("Plus");
        proposition = Number(prompt("Proposez un nombre plus grand :"));
    } else {
        console.log("Moins");
        proposition = Number(prompt("Proposez un nombre plus petit :"));
    }
}
console.log("Bonne réponse !");
// var victoire = document.write("<h1 id="truc">Vous avez gagné !!!</h1>");


