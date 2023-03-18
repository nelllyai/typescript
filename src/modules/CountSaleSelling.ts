import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class CountSaleSelling extends AbstractSelling {
  private _saleCount: number;

  constructor(product: Product, count: number, saleCount: number) {
    super(product, count);
    this._saleCount = saleCount;
  }

  public override getPrice(): number {
    const startCost = this._product.cost;
    let result: number = 0;

    if (this._count >= this._saleCount) {
      result = (startCost - startCost / 100 * 10 ) * this._count;
    } else {
      result = startCost * this._count;
    }

    return Math.round(result * 100) / 100;
  };
}
