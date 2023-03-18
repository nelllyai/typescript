"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountSaleSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class CountSaleSelling extends AbstractSelling_1.AbstractSelling {
    _saleCount;
    constructor(product, count, saleCount) {
        super(product, count);
        this._saleCount = saleCount;
    }
    getPrice() {
        const startCost = this._product.cost;
        let result = 0;
        if (this._count >= this._saleCount) {
            result = (startCost - startCost / 100 * 10) * this._count;
        }
        else {
            result = startCost * this._count;
        }
        return Math.round(result * 100) / 100;
    }
    ;
}
exports.CountSaleSelling = CountSaleSelling;
