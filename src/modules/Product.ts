export class Product {
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
