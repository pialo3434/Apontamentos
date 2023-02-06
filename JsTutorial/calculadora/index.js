let inputOver = document.querySelector("#calculadora #overText"); 
let inputBellow = document.querySelector("#calculadora #calcText");
const equalButton = document.getElementById("equalBtn");
const numButtons = document.querySelectorAll(".btn_num");
const plus = document.getElementById("plus");
const deletee = document.getElementById("delete");

// Listen for the click event on the equal button
equalButton.addEventListener("click", function() {
    // Split the input string into an array of numbers and operators
    let inputArray = inputOver.value.split(/(\+)/g);
  
    // Perform the addition calculation
    let result = 0;
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === "+") {
        let parsedValue = parseInt(inputArray[i + 1]);
        if (!isNaN(parsedValue)) {
          result += parsedValue;
        } else {
          inputBellow.value = "ERROR!";
          return;
        }
      } else if (i === 0) {
        let parsedValue = parseInt(inputArray[i]);
        if (!isNaN(parsedValue)) {
          result += parsedValue;
        } else {
          inputBellow.value = "ERROR!";
          return;
        }
      }
    }
  
    // Update the input field with the result
    inputBellow.value = result;
  });
  
  numButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      inputOver.value += this.innerHTML;
    });
  });

  plus.addEventListener("click", function() {
    inputOver.value += this.innerHTML;
  });

  deletee.addEventListener("click", function() {
    inputOver.value = inputOver.value.slice(0, -1);
  });