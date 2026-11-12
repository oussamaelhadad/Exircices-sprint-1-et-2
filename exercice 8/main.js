
const notes = document.querySelectorAll(".note");
const namenotes = document.getElementsByClassName("note");

console.log(notes);
console.log(namenotes);

const btnSurligner = document.querySelector("#surligner");

btnSurligner.addEventListener("click", () => {
    notes.forEach(note => {
        note.classList.toggle("bg-yellow-200");
    });
});

const btnlire = document.querySelector("#lire");

btnlire.addEventListener("click", () => {
    const radios = document.getElementsByName("theme");

    radios.forEach(radio => {
        if (radio.checked) {
            console.log(radio.value);
        }
    });
});
