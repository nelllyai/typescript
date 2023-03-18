"use strict";
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
class AbstractSelling {
    _product;
    _count;
    constructor(product, count) {
        this._product = product;
        this._count = count;
    }
    get product() {
        return this._product;
    }
    get count() {
        return this._count;
    }
    set product(product) {
        this._product = product;
    }
    set count(count) {
        this._count = count;
    }
}
