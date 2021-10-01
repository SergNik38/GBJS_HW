'use strict'

function sumNumb(num1, num2) {
    let res = num1 + num2
    return res
}

function subNumb(num1, num2) {
    let res = num1 - num2
    return res
}

function mulNumb(num1, num2) {
    let res = num1 * num2
    return res
}

function divNumb(num1, num2) {
    let res = num1 / num2
    return res
}


function mathOperations(num1, num2, operation) {
    let result = ''
    switch (operation) {
        case '+':
            result = sumNumb(num1, num2);
            return result;
        case '-':
            result = subNumb(num1, num2);
            return result;
        case '*':
            result = mulNumb(num1, num2);
            return result;
        case '/':
            result = divNumb(num1, num2);
            return result;
    }
}


let a = parseInt(prompt('Введите первое число'));
let b = parseInt(prompt('Введите второе число'));
let oper = prompt('Введите операцию (+, -, ;, /');

let result = mathOperations(a, b, oper)
alert(result)

