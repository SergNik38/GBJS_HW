'use strict'

function Product(name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
};


let prodObj = new Product('prod1', 500);


console.log(prodObj.price);
prodObj.make25PercentDiscount();
console.log(prodObj.price);


class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount = function () {
        this.price *= 0.75;
    }
};

let prodObj2 = new Product2('prod2', 800);

console.log(prodObj2.price);
prodObj2.make25PercentDiscount();
console.log(prodObj2.price);
