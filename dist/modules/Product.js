"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    _title;
    _cost;
    constructor(title, cost) {
        this._title = title;
        this._cost = cost;
    }
    get title() {
        return this._title;
    }
    get cost() {
        return this._cost;
    }
    set title(title) {
        this._title = title;
    }
    set cost(cost) {
        this._cost = cost;
    }
}
exports.Product = Product;
