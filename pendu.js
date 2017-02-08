var motSecret;

var tableauMot=new Array(
  tâche
  pistache
  pauvre
  technique
);
 // Le tableau qui contient les lettres du mot à trouver


var tailleMot = motSecret.length;
 // Le nombre de lettres du mot à trouver

motSecret=tableauMot[Math.random()];

for(var i=0; i<=tailleMot; i++) {
    foreach() {

    }
}

// Gère tous les traitements à faire lorsqu'on appuie sur une touche
function proposer(element){

    // Si la couleur de fond est lightgreen, c'est qu'on a déjà essayé - on quitte la fonction
    if(element.style.backgroundColor=="#a4da14" ||fini) return;

    // On récupère la lettre du clavier et on met la touche en lightgreen (pour signaler qu'elle est cliquée)
    var lettre=element.innerHTML;
    changeCouleur(element,"#a4da14");

    // On met la variable trouve à false;
    var trouve=false;

    // On parcours chaque lettre du mot, on cherche si on trouve la lettre séléectionnée au clavier

    // Si la lettre n'est pas présente, trouvé vaut toujours false :
    if(!trouve){
        coupsManques++;
        document.images['pendu'].src="images/pendu/"+coupsManques+".png"; // On change l'image du pendu

        // Si on a raté 9 fois :
        if(coupsManques==9){
            alert("Vous avez perdu !");
            for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible';
            fini=true;
            // on affiche le mot, on fini le jeu
        }
    }
    if(lettresTrouvees==tailleMot){
        alert("Bravo ! Vous avez découvert le mot secret !");
        fini=true;
    }
}
