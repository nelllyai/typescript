export class Job {
  private role: string;
  private _salary: number;

  constructor(role: string, salary: number) {
    this.role = role;
    this._salary = salary;
  }

  public work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}`);
  }

  public get salary(): number {
    return this._salary;
  }
}
