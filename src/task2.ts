class Product {
  private _title: string;
  private _cost: number;

  constructor(title: string, cost: number) {
    this._title = title;
    this._cost = cost;
  }

  public get title(): string {
    return this._title;
  }

  public get cost(): number {
    return this._cost;
  }

  public set title(title: string) {
    this._title = title;
  }

  public set cost(cost: number) {
    this._cost = cost;
  }
}

abstract class AbstractSelling {
  private _product: Product;
  private _count: number;

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
  public abstract compare(product: Product): void;
}


