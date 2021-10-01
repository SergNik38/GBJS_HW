'use strict'

let summ = prompt('Укажите количество денег');
let len = Number(summ.length);

let lastSymbol = Number(summ.charAt(len - 1));
console.log(lastSymbol);

let rouble = '';
switch (lastSymbol) {
    case 0:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        rouble = 'рублей';
        break;
    case 1:
        rouble = 'рубль';
        break;
    case 2:
    case 3:
    case 4:
        rouble = 'рубля';
        break;
}


let result = `Ваша сумма в ${summ} ${rouble} успешно зачислена`;

alert(result);