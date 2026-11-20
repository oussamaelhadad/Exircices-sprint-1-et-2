const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 }
];

console.log(produits[0].nom)
console.log(produits[2].prix);


function creerFiche(produit){
    const { nom, prix, stock } = produit;

    const article = document.createElement("article");

    const titre = document.createElement("h2");
    const paragraphe = document.createElement("p");

    titre.textContent = nom;
    paragraphe.textContent = `${prix} DH`;

    article.appendChild(titre);
    article.appendChild(paragraphe);

    article.className = "border p-4 rounded-lg";

    if (stock === 0) {
        const rupture = document.createElement("p");
        rupture.textContent = "Rupture";
        rupture.className = "text-red-500";

        article.appendChild(rupture);
    }

    return article;
}

const catalogue = document.getElementById("catalogue");

produits.forEach(produit => {
    const fiche = creerFiche(produit);
    catalogue.appendChild(fiche);
});

