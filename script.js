function addTodo() {

event.preventDefault();

console.log("Is button clicked?")


// const er en ærklæring
//taskInputData er et variabelnavn
//= er å erklære en verdi som skal lagres
//document refererer til et HTML dokument
//.queryselector() henter noe fra HTML
//#TaskInput er id-navnet til elementet vi henter fra HTML
//.value er noe vi henter til elementet
//; betyr full stopp. Denne linjen med kode er ferdig
const taskInputData = document.querySelector("#taskInput").value;
console.log(taskInputData);
// Definere et et element i dette tilfellet en liste og skriver den ut i terminalen.
const newListItem = document.createElement("li");
console.log(newListItem);
//
newListItem.textContent = taskInputData;
//
const taskList = document.querySelector("#taskList");
console.log(taskList);
//Legger til det siste  barne-elementet inne i (newListItem)
taskList.appendChild(newListItem);

}
//
const taskButton = document.querySelector("#taskButton");
console.log(taskButton);
//
taskButton.addEventListener("click", addTodo);


