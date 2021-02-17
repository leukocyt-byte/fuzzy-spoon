const formColor = document.querySelector("form");
const radios = formColor.elements.radioCol;

const Pair = (x, y) => [x, y];

const avColors = ["redBg", "yellowBg", "blueBg", "pinkBg", "blank"];
const defaultColor = avColors[0];
const cardTemplate = document.querySelector("#card_form");

radios.forEach((radio) => {
  radio.addEventListener("click", (event) => {
    const cont = event.target.closest(".container");
    cont.setAttribute("input-color", radios.value);
  });
});

const form = document.querySelector("#upper-card form");
const taskInput = document.querySelector(".new-task-input");
const collection = document.getElementById("collection");

form.addEventListener("submit", addCard);

function addCard(e) {
  const cont = e.target.querySelector(".container");
  const colorSelected = cont.getAttribute("input-color");
  const cardValue = cont.querySelector("#task").value;
  if (cardValue == "") {
    alert("Please enter your task");
    return false;
  };

  const card = cardTemplate.cloneNode(true).content; // nowy element

  card.querySelector(".container").setAttribute("input-color", colorSelected);
  card.querySelector(".new-task-input").value = cardValue;

  let li = document.createElement("li");
  li.classList.add("card-item");
  li.appendChild(card);

  const mainCol = document.getElementById("main-color");
  mainCol.classList.add("blank");
  taskInput.value = "";
  collection.appendChild(li);
  e.preventDefault();
}

collection.addEventListener('click', removeCard);
function removeCard(e) {
    if(e.target.classList.contains('remove-item')) {
        e.target.closest('.container').remove();
    }    
}