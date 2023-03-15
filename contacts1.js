"use strict";
{
    ;
    const persons = [
        {
            type: 'admin',
            name: 'Оксана Фролова',
            age: 31,
            role: 'Администратор форума'
        },
        {
            type: 'admin',
            name: 'Леонид Костылев',
            age: 25,
            role: 'Администратор чата',
        },
        {
            type: 'user',
            name: 'Иван Петров',
            age: 27,
            group: 'SEO-специалист',
        },
        {
            type: 'user',
            name: 'Марат Aляуддинов',
            age: 20,
            group: 'Музыкант',
        },
        {
            type: 'user',
            name: 'Андрей Вариков',
            age: 23,
            group: 'Веб-разработчик',
        },
        {
            type: 'user',
            name: 'Василий Котиков',
            age: 29,
            group: 'Копирайтер'
        },
        {
            type: 'user',
            name: 'Юлия Гудина',
            age: 20,
            group: 'Дизайнер',
        }
    ];
    const logPerson = (person) => {
        let information;
        if ('role' in person) {
            information = person.role;
        }
        else {
            information = person.group;
        }
        console.log(`${person.name}, ${person.age}, ${information}`);
    };
    persons.forEach(logPerson);
}
