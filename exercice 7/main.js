
let noteCount = 0;

const btnAjouter = document.querySelector("#ajouter");
const notesList = document.querySelector("#notes");

btnAjouter.addEventListener("click", () => {
    noteCount++;

    const li = document.createElement("li");

    console.log("Avant appendChild:", li);

    li.textContent = `Note n° ${noteCount}`;

    li.className = "p-2 bg-yellow-100 rounded";

    notesList.appendChild(li);

    console.log("Après appendChild:", li);
});