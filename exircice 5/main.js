let compteur = 0;

const afficher = () => {
    const valeur = document.querySelector("#valeur");
    valeur.textContent = compteur
}  
const btnplus = document.getElementById("plus")
const btnmoins = document.getElementById("moins")
const btnreset = document.getElementById("reset")

    btnplus.addEventListener("click", () =>{
      compteur ++;
       afficher();
    })

   btnmoins.addEventListener("click", () => {
    if (compteur > 0){
    compteur --;
    afficher();
}
   })

    btnreset.addEventListener("click", () =>{
        compteur = 0;
        afficher();
    })