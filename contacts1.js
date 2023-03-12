"use strict";
{
    const persons = [
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
    const logPerson = (person) => {
        console.log(`${person.name}, ${person.age}`);
    };
    console.log('Users:');
    persons.forEach(logPerson);
}