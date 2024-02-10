// pour l'exemple
// console.log(document.forms);
let monFormulaire = document.forms.myForm;
monFormulaire.addEventListener("submit", (e) => {
  e.preventDefault(); // => annule le comportement par défaut
  // de l'événement submit
  // donc la page ne va pas se recharger
  // on affiche dans la console la valeur du champs de recherche
  console.log(monFormulaire.nameSearch.value);
  let maRecherche = monFormulaire.nameSearch.value;
  // on fabrique notre requete avec la valeur du champs de recherche
  let myRequest = "https://api.tvmaze.com/singlesearch/shows?q=" + maRecherche;
  console.log(myRequest);
  fetch(myRequest)
    .then((reponse) => reponse.json())
    .then((reponseJson) => affiche(reponseJson))
    .catch((error) => console.log(error));
});

const affiche = (unJSON) => {
  console.log(unJSON);
  // On efface le contenu précédent
  document.body.innerHTML = "";

  //On crée un élément h1
  let titre = document.createElement("h1");
  //On rajoute le nom de la série
  titre.textContent = unJSON.name;
  //On appelle le titre
  document.body.appendChild(titre);

  //On crée un élément de paragraphe
  let summary = document.createElement("p");

  //Affiche le résumé de la série
  summary.innerHTML = unJSON.summary;
  document.body.appendChild(summary);
};
