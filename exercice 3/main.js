const stock = 8;
const badge = document.getElementById("badge");
  
stock >= 1 && stock <= 3 ? badge.textContent = "Presque épuisé" : stock > 3 ? badge.textContent = "Disponible" : badge.textContent = "Rupture";

if(stock === 0 ){
    badge.classList.add("bg-red-200");
}
else if(stock >= 1 && stock <= 3){
     badge.classList.add("bg-yellow-200");
}
else{
    badge.classList.add("bg-green-200");
}
