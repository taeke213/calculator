let display = document.getElementById("display")
let operators = document.querySelectorAll(".operators")
let equalbut = document.getElementById("=") 
let clear = document.getElementById("c")
let numbers = document.querySelectorAll(".numbers")
let backspace = document.getElementById("backspace")
let displayvalue = ''
let num1 = 0
let num2 = 0
let operation = ''
let operatorpressed = false
let result = ''

clear.addEventListener(("click"), () => clearing())
numbers.forEach(key => key.addEventListener(("click"), e => updatedisplay(e.target.innerHTML)))
operators.forEach(key => key.addEventListener(("click"), o => handleoperation(o)))
equalbut.addEventListener(("click"), () =>  {
    if(operatorpressed){
    num2 = displayvalue
    Number(num1)
    Number(num2)
    displayvalue = ''
    result = roundTo(operate(operation, num1, num2), 10) 
    if(result == Infinity){
        display.textContent = "can't divide by 0"
    } else {
        display.textContent = result
    }
    operatorpressed = false
}})
backspace.addEventListener(("click"), () => {
    const newvalue = displayvalue.slice(0, -1)
    displayvalue = newvalue
    display.textContent = displayvalue
})
window.addEventListener(("keydown"), e => {
    updatedisplay(e.key)
})

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
        case "x":
            return functions["times"](num1, num2);
            break;
        case "/":
            return functions["divide"](num1, num2);
            break;
        case "^":
            return functions["power"](num1, num2);
            break;
        case "%":
            return functions["percenatage"](num1, num2);
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
        operation = o
        display.textContent = operation
    }
}



function updatedisplay(e){
    if(Number(e) || e == "."){
    displayvalue += e
    display.innerHTML = displayvalue;
    }
    switch(e){
        case "x":
            handleoperation(e)
            break
        case "+":
            handleoperation(e)
            break
        case "-":
            handleoperation(e)
            break
        case "^":
            handleoperation(e)
            break
        case "/":
            handleoperation(e)
            break
        case "%":
            handleoperation(e)
            break
        case "c":
            clearing()
            break
        case "Backspace":
            const newvalue = displayvalue.slice(0, -1)
            displayvalue = newvalue
            display.textContent = displayvalue
            break
        case "Enter":
            if(operatorpressed){
                num2 = displayvalue
                displayvalue = ''
                Number(num1)
                Number(num2)
            result = operate(operation, num1, num2)}
            if(result == Infinity){
                    display.textContent = "can't divide by 0"
            } else {
                    display.textContent = result
            }
                operatorpressed = false
            break
        
    }
    
    
    if(operatorpressed){
        num2 += e
    }
}
function roundTo(num, precision) {
    const factor = Math.pow(10, precision)
    return Math.round(num * factor) / factor
}

function clearing(){
    displayvalue = ''
    display.textContent = ''
    num1 = ''
    num2 = ''
    operatorpressed = false
}

var functions = {
    add: function (num1, num2) {return num1 + num2},
    min: function (num1,num2) {return num1 - num2},
    times: function(num1,num2) {return num1 * num2},
    divide: function(num1, num2) {return num1 / num2},
    percenatage: function(num1, num2) {return num1/num2 * 100},
    power: function(num1, num2) {return num1 ** num2}
}