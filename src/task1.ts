import { Job } from "./modules/Job";
import { Person } from "./modules/Person";

const worker1 = new Person('Федя');
const worker2 = new Person('Ваня');
const worker3 = new Person('Лиза');

const job1 = new Job('грузчик', 15000);
const job2 = new Job('курьер', 23000);
const job3 = new Job('декоратор', 35000);

worker1.job = job1;
worker2.job = job2;
worker3.job = job3;

worker1.work();
worker2.work();
worker3.work();

console.log('\nНаши герои прошли курсы повышения квалификации!\n');

const newJob1 = new Job('дизайнер', 50000);
const newJob2 = new Job('программист', 60000);
const newJob3 = new Job('менеджер', 70000);

worker1.job = newJob3;
worker2.job = newJob2;
worker3.job = newJob1;

worker1.work();
worker2.work();
worker3.work();

// по д/з никак не воспользовались методом getSalary,
// так что написала тест сама

console.log('\nУ последнего работника зарплата - ' + worker3.getSalary() + ' рублей');
