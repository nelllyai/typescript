"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedSaleSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class FixedSaleSelling extends AbstractSelling_1.AbstractSelling {
    constructor(product, count) {
        super(product, count);
    }
    getPrice() {
        const result = (this._product.cost - 10) * this._count;
        return Math.round(result * 100) / 100;
    }
    ;
}
exports.FixedSaleSelling = FixedSaleSelling;
