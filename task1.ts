class Job {
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

class Person {
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

const workers: Person[] = [new Person('Федя'), new Person('Ваня'), new Person('Лиза')];

const job1 = new Job('грузчик', 15000);
const job2 = new Job('курьер', 23000);
const job3 = new Job('декоратор', 35000);

workers[0].job = job1;
workers[1].job = job2;
workers[2].job = job3;

workers.forEach(worker => worker.work());

console.log('\nНаши герои прошли курсы повышения квалификации!\n');

const newJob1 = new Job('дизайнер', 50000);
const newJob2 = new Job('программист', 60000);
const newJob3 = new Job('менеджер', 70000);

workers[0].job = newJob3;
workers[1].job = newJob2;
workers[2].job = newJob1;

workers.forEach(worker => worker.work());

// по д/з никак не воспользовались методом getSalary,
// так что написала тест сама

const sum: number = workers.reduce((currentSum, person) => {
  return currentSum + person.getSalary();
}, 0);
console.log('Всего наши ребята получают ' + sum + ' рублей в месяц!');
