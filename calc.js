let display = document.getElementById("display")
let operators = document.querySelectorAll(".operators")
let equalbut = document.getElementById("=") 
let displayvalue = ''
let numbers = document.querySelectorAll(".numbers")
let num1 = 0
let num2 = 0
let operation = ''
let operatorpressed = false
let result = ''

numbers.forEach(key => key.addEventListener(("click"), e => updatedisplay(e)))
operators.forEach(key => key.addEventListener(("click"), o => handleoperation(o)))
equalbut.addEventListener(("click"), () =>  {
    if(operatorpressed){
    displayvalue = ''
    display.textContent = operate(operation, num1, num2)
    operatorpressed = false
}})

function operate(operation, num1, num2){
    num1 = Number(num1)
    num2 = Number(num2)
    switch(operation){
        case "+":
            return functions["add"](num1, num2);
            break;
        case "-":
            return functions["min"](num1, num2);
            break;
        case "X":
            return functions["times"](num1, num2);
            break;
        case "/":
            return functions["divide"](num1, num2);
            break;
    }
    operation = ''
    num1 = 0
    num2 = 0
}

function handleoperation(o){
    if(!operatorpressed){
        operatorpressed = true
        num1 = displayvalue
        displayvalue = ''
        display.textContent = displayvalue
        operation = o.target.value
    }
}

function updatedisplay(e){
    displayvalue += e.target.textContent
    display.innerHTML = displayvalue;
    if(operatorpressed){
        num2 = e.target.textContent
    }
}


var functions = {
    add: function (num1, num2) {return num1 + num2},
    min: function (num1,num2) {return num1 - num2},
    times: function(num1,num2) {return num1 * num2},
    divide: function(num1, num2) {return num1 / num2}

}