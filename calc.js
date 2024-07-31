
let num1 = 3
let num2 = 5

var functions = {
    add: function (num1, num2) {return num1 + num2},
    min: function (num1,num2) {return num1 - num2},
    times: function(num1,num2) {return num1 * num2},
    divide: function(num1, num2) {return num1 / num2}

}
let operate = prompt("what?")
console.log(functions[operate](num1, num2))