const message = '<img src=x onerror="alert(1)">';

const btn = document.getElementById("go");
const zonetext = document.getElementById("zoneTexte");
const zonehtml = document.getElementById("zoneHtml");

btn.addEventListener("click", () => {

    zonetext.textContent = message;

    zonehtml.innerHTML = message;

    zonehtml.innerHTML += " Fin";

    console.log(zonehtml.innerHTML);
    
});
