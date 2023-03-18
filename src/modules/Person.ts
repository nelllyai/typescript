import { Job } from "./Job";

export class Person {
  private _job?: Job;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  set job(job: Job) {
    this._job = job;
  }

  public getSalary(): number {
    if (this._job) {
      return this._job.salary;
    }
    return 0;
  }

  public work(): void {
    if (this._job) {
      this._job.work(this.name);
    }
  }
}
