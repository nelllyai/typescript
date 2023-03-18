"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
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
    static compare(firstSelling, secondSelling) {
        return -(firstSelling.getPrice() - secondSelling.getPrice());
    }
}
exports.AbstractSelling = AbstractSelling;
