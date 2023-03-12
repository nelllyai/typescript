"use strict";
{
    const persons = [
        {
            name: 'Оксана Фролова',
            age: 31,
            role: 'Администратор форума'
        },
        {
            name: 'Леонид Костылев',
            age: 25,
            role: 'Администратор чата',
        },
        {
            name: 'Иван Петров',
            age: 27,
            group: 'SEO-специалист',
        },
        {
            name: 'Марат Aляуддинов',
            age: 20,
            group: 'Музыкант',
        },
        {
            name: 'Андрей Вариков',
            age: 23,
            group: 'Веб-разработчик',
        },
        {
            name: 'Василий Котиков',
            age: 29,
            group: 'Копирайтер'
        },
        {
            name: 'Юлия Гудина',
            age: 20,
            group: 'Дизайнер',
        }
    ];
    const logPerson = (user) => {
        console.log(`${user.name}, ${user.age}`);
    };
    persons.forEach(logPerson);
}
