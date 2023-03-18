import { Product } from "./Product";

export abstract class AbstractSelling {
  protected _product: Product;
  protected _count: number;

  constructor(product: Product, count: number) {
    this._product = product;
    this._count = count;
  }

  public get product(): Product {
    return this._product;
  }

  public get count(): number {
    return this._count;
  }

  public set product(product: Product) {
    this._product = product;
  }

  public set count(count: number) {
    this._count = count;
  }

  public abstract getPrice(): number;
  public static compare(firstSelling: AbstractSelling, secondSelling: AbstractSelling): number {
    return -(firstSelling.getPrice() - secondSelling.getPrice());
  }
}
