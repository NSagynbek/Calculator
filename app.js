const inputField = document.querySelector("#inputField");
const container = document.querySelector(".main-container");
const allClear = document.querySelector("#all-clear");
const switchButton = document.querySelector("#switch");


allClear.addEventListener("click", clear);
switchButton.addEventListener("click", change);
container.addEventListener("click", handleClick);


function clear() {
    inputField.value = "";
}


function change() {
    let inputValue = parseFloat(inputField.value);

    if (inputValue < 0) {
        inputField.value = Math.abs(inputValue);
        console.log(inputValue)
    } else {
        inputField.value = -Math.abs(inputValue);
        console.log(inputValue)
    }
    
}


let operator = "";
let num1 = null;
let num2 = null;


function handleClick(event) {
    const clickedButton = event.target;
    const clickedValue = clickedButton.textContent;
    console.log(clickedValue);

    if (!isNaN(clickedValue) || clickedValue === ".") {
        if (operator === "") {
            // If no operator is set, update num1
            if (clickedValue === ".") {
                if (!inputField.value.includes(".")) {
                    inputField.value += clickedValue;
                    console.log(inputField.value)
                }
            } else {
                inputField.value += clickedValue;
                console.log(inputField.value)
                if (isNaN(num1)) {
                    num1 = 0;
                    console.log(num1)
                }
                num1 = parseFloat(inputField.value);
                console.log(num1)
            }
        } else {
            // If operator is set, update num2
            if (clickedValue === ".") {
                if (!inputField.value.includes(".")) {
                    inputField.value += clickedValue;
                    console.log(inputField.value)
                }
            } else {
                inputField.value += clickedValue;
                console.log(inputField.value)
                if (isNaN(num1)) {
                    num2 = 0;
                }
                num2 = parseFloat(inputField.value);
                console.log(num2)
            }

        }
    }

    // Handle operator buttons
    if (clickedValue === "+" || clickedValue === "-" || clickedValue === "*" || clickedValue === "/" || clickedValue === "%") {
        operator = clickedValue;
        console.log(operator)
        inputField.value = operator;
        console.log(inputField.value)
        inputField.value = "";
        console.log(inputField.value)
    }


    // Handle equal button
    if (clickedValue === "=")   {
        if (num1 !== null && num2 !== null && operator !== "") {
          console.log(num1)
          console.log(num2)
          console.log(operator)
            let result;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    console.log(`I am result  ${result}`);
                    break;
                case "-":
                    result = num1 - num2;
                    console.log(`I am result  ${result}`);
                    break;
                case "*":
                    result = num1 * num2;
                    console.log(`I am result  ${result}`);
                    break;
                case "/":
                    result = num1 / num2;
                    console.log(`I am result  ${result}`);
                    break;
                case "%":
                    result = num1 % num2;
            }
            inputField.value = result;
            num1 = result;
            num2 = null;
            operator = "";
        }
    }
}
    

/*     const clickedNumber = 2;
    const displayValue = "2.5";
    const mainArray = displayValue.split(".");
    const numberWhole = mainArray[0];
    let numberDecimal = mainArray[1]; // Change to let since we're modifying it
    
    numberDecimal = parseFloat(numberDecimal); // Convert to a number
    numberDecimal += clickedNumber; // Perform numerical addition
    
    console.log(numberDecimal); // Output: 7
    
    console.log(mainArray);
    console.log(`I am whole-${numberWhole}`);
    console.log(`I am decimal-${numberDecimal}`); */
    


   
    



