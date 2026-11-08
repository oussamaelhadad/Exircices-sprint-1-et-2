console.log("JS connecté");

const nom = "clavier";
let prix = 250;

prix = 199;

const elementnom = document.getElementById("nom");
const elementprix = document.getElementById("prix");

elementnom.textContent = nom;
elementprix.textContent = prix + " DH";
