const courses = ['Pain', 'Lait', '?ufs', 'Tomates'];

console.log(courses[0]);
console.log(courses[courses.length -1]);
console.log(courses.length);

document.querySelector("#total").textContent = courses.length + " articles";

const liste = document.querySelector("#liste");

for (let i = 0; i < courses.length; i++) {
  const li = document.createElement("li");
  li.textContent = courses[i];
  liste.appendChild(li);
}

courses.push("Beurre");

document.querySelector("#total").textContent = courses.length + " articles";

const liBeurre = document.createElement("li");
liBeurre.textContent = courses[courses.length - 1];
liste.appendChild(liBeurre);

const indexTomates = courses.indexOf("Tomates");
courses.splice(indexTomates, 1);

document.querySelector("#total").textContent = courses.length + " articles";

liste.removeChild(liste.children[indexTomates]);

if (courses.includes("Lait")) {
  document.querySelector("#message").textContent = "Lait est dans la liste";
} else {
  document.querySelector("#message").textContent = "Lait n'est pas dans la liste";
}
