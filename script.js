/** 
@author: DION FIACRE ARMEL
@description: L'Exercice consiste a reproduire un schema constiué d'etoiles, dans un premier temps avec une boucle for puis une boucle imbriqué
@param: i:variable
@returns: resultat, resultat1
*/

/* ================= DAYLING CHALLENGE ================= */

//Partie 1: Reproduire le schema en utilisant la boucle for

let resultat = "";
for (let i = 0; i <= 5; i++) {
    resultat = resultat+"*";
    console.log(resultat);
}


//Partie 1: Reproduire le schema en utilisant la boucle fordes boucles imbriqués

let resultat1 = "";
for (let i = 0; i <= 5; i++) {
    resultat1 = resultat1+"*";
    for (let j = 0; j < 1; j++) {
      console.log(resultat1);
    }
  }
