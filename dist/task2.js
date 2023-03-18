"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./modules/Product");
const AbstractSelling_1 = require("./modules/AbstractSelling");
const FixedSaleSelling_1 = require("./modules/FixedSaleSelling");
const CountSaleSelling_1 = require("./modules/CountSaleSelling");
const sellings = [
    new FixedSaleSelling_1.FixedSaleSelling(new Product_1.Product('толстовка', 42), 1),
    new FixedSaleSelling_1.FixedSaleSelling(new Product_1.Product('кроссовки', 33), 2),
    new FixedSaleSelling_1.FixedSaleSelling(new Product_1.Product('лампа', 15.6), 3),
    new FixedSaleSelling_1.FixedSaleSelling(new Product_1.Product('ноутбук', 520), 1),
    new CountSaleSelling_1.CountSaleSelling(new Product_1.Product('чипсы', 1.8), 12, 6),
    new CountSaleSelling_1.CountSaleSelling(new Product_1.Product('ложка', 1), 10, 15),
    new CountSaleSelling_1.CountSaleSelling(new Product_1.Product('книга', 3.2), 5, 5),
    new CountSaleSelling_1.CountSaleSelling(new Product_1.Product('свечка', 2), 8, 5),
];
sellings.forEach(selling => console.log(selling, 'Итого:', selling.getPrice()));
console.log('\nОтсортировали массив по убыванию стоимости покупки:\n');
sellings.sort(AbstractSelling_1.AbstractSelling.compare).forEach(selling => console.log(selling, 'Итого:', selling.getPrice()));
