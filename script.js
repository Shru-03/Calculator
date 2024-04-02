let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.value == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.value == "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string = string + e.target.value;
      input.value = string;
    }
  });
});
