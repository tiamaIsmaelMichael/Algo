function analyserPhrase(phrase) {
  let longueur = 0;
  let nbMots = 1;
  let nbVoyelles = 0;

  const voyelles = "aeiouyAEIOUY";

  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i];
    longueur++;

    if (char === " ") {
      nbMots++;
    }

    if (voyelles.includes(char)) {
      nbVoyelles++;
    }

    if (char === ".") {
      break; // On s'arrête à la fin de la phrase
    }
  }

  console.log("Résultat de l'analyse :");
  console.log("Longueur de la phrase :", longueur, "caractères");
  console.log("Nombre de mots :", nbMots);
  console.log("Nombre de voyelles :", nbVoyelles);
}


