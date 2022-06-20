import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.subscribe(() => {
  number.innerText = countStore.getState();
});

plus.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
