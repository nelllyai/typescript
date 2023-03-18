import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class FixedSaleSelling extends AbstractSelling {
  constructor(product: Product, count: number) {
    super(product, count);
  }

  public override getPrice(): number {
    const result = (this._product.cost - 10) * this._count
    return Math.round(result * 100) / 100;
  };
}
