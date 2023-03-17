"use strict";
class Job {
    constructor(role, salary) {
        this.role = role;
        this._salary = salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
    get salary() {
        return this._salary;
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }
    set job(job) {
        this._job = job;
    }
    getSalary() {
        if (this._job) {
            return this._job.salary;
        }
        return 0;
    }
    work() {
        if (this._job) {
            this._job.work(this.name);
        }
    }
}
const workers = [new Person('Федя'), new Person('Ваня'), new Person('Лиза')];
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
const sum = workers.reduce((currentSum, person) => {
    return currentSum + person.getSalary();
}, 0);
console.log('Всего наши ребята получают ' + sum + ' рублей в месяц!');
