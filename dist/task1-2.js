"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Students_1 = require("./modules/Students");
const Employees_1 = require("./modules/Employees");
// студенты
const students = new Students_1.Students();
students.add({
    id: 3432,
    firstName: 'Вася',
    surname: 'Котеев',
    age: 21,
    year: 3,
    speciality: 'программист'
});
students.add({
    id: 54654,
    firstName: 'Аня',
    surname: 'Ритова',
    age: 20,
    year: 2,
    speciality: 'дизайнер'
});
students.add({
    id: 124654,
    firstName: 'Антон',
    surname: 'Доротов',
    age: 31,
    year: 5,
    speciality: 'геолог'
});
students.add({
    id: 345765,
    firstName: 'Валерия',
    surname: 'Енкова',
    age: 18,
    year: 1,
    speciality: 'филолог'
});
students.add({
    id: 235,
    firstName: 'Геннадий',
    surname: 'Турков',
    age: 25,
    year: 4,
    speciality: 'лингвист'
});
console.log('Список студентов по возрастанию id:');
console.log(students.sorted());
console.log('Вывод студента с id 235:');
console.log(students.get(235));
console.log('Удаление студента с id 235...');
students.remove(235);
console.log('Вывод студента с id 235:');
console.log(students.get(235));
console.log();
// работники
const employees = new Employees_1.Employees();
employees.add({
    id: 675,
    firstName: 'Тина',
    surname: 'Ногова',
    age: 38,
    post: 'повар'
});
employees.add({
    id: 875656,
    firstName: 'Шарид',
    surname: 'Мартухаев',
    age: 54,
    post: 'флорист'
});
console.log();
console.log('Список работников по убыванию id:');
console.log(employees.sorted('down'));
console.log('Вывод работника с id 675:');
console.log(employees.get(675));
console.log('Удаление работника с id 675...');
employees.remove(675);
console.log('Вывод работника с id 675:');
console.log(employees.get(675));