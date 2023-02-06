let inputOver = document.querySelector("#calculadora #overText");
let inputBellow = document.querySelector("#calculadora #calcText");
const equalButton = document.getElementById("equalBtn");
const numButtons = document.querySelectorAll(".btn_num");
const plus = document.getElementById("plus");
const deletee = document.getElementById("delete");
const allClearr = document.getElementById("allClear");
const dott = document.getElementById("dot");
const dividee = document.getElementById("divide");
const subtractt = document.getElementById("minus");
const multiplyy = document.getElementById("multiply");

equalButton.addEventListener("click", function () {
  if (!inputOver.value) return;

  // Split the input string into an array of numbers and operators
  let inputArray = inputOver.value.split(/([\+-\*\/])/g);

  // Perform the calculation
  let result = 0;
  let operator = "+";
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] === "+") {
      operator = "+";
    } else if (inputArray[i] === "-") {
      operator = "-";
    } else if (inputArray[i] === "*") {
      operator = "*";
    } else if (inputArray[i] === "/") {
      operator = "/";
    } else {
      let parsedValue = parseFloat(inputArray[i]);
      if (!isNaN(parsedValue)) {
        switch (operator) {
          case "+":
            result += parsedValue;
            break;
          case "-":
            result -= parsedValue;
            break;
          case "*":
            result *= parsedValue;
            break;
          case "/":
            result /= parsedValue;
            break;
        }
      } else {
        inputBellow.value = "ERROR!";
        return;
      }
    }
  }

  // Display the result if there's no error
  if (inputBellow.value !== "ERROR!") {
    inputBellow.value = result;
  }
});


numButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    inputOver.value += this.innerHTML;
  });
});

plus.addEventListener("click", function () {
  inputOver.value += this.innerHTML;
});

dott.addEventListener("click", function () {
  inputOver.value += this.innerHTML;
});

dividee.addEventListener("click", function () {
  inputOver.value += this.innerHTML;
});

subtractt.addEventListener("click", function () {
  inputOver.value += this.innerHTML;
});

multiplyy.addEventListener("click", function () {
  inputOver.value += "*";
});

deletee.addEventListener("click", function () {
  inputOver.value = inputOver.value.slice(0, -1);
});

allClearr.addEventListener("click", function () {
  inputOver.value = "";
});
