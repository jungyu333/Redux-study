const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let counter = 0;

const updateText = () => {
  number.innerText = counter;
};

const handleAdd = () => {
  counter = counter + 1;
  updateText();
};
const handleMinus = () => {
  counter = counter - 1;
  updateText();
};

number.innerText = counter;

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
