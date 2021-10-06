'use strict'

const transformNumbToObj = function (num) {
    let result = {
        units: null,
        tens: null,
        hundreds: null,
    };
    if (Number.isInteger(num)) {
        result.units = num % 10;
        result.tens = parseInt(num / 10) % 10;
        result.hundreds = parseInt(num / 100);
    } else {
        alert('Вы ввели не целое число либо не число, повторите еще раз');
        return;
    }
    return result;
};


let numb = Number(prompt('Введите целое число'));
console.log(transformNumbToObj(numb));