'use strict'
/*
два случайных числа от -100 до 100
*/
let a = parseInt(((Math.random() < 0.5) ? -1 : 1) * Math.random() * 100);
let b = parseInt(((Math.random() < 0.5) ? -1 : 1) * Math.random() * 100);

console.log(a, b);

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    let s = a + b;
    console.log(s)
}
