{
  type User = {
    type: string,
    name: string,
    age: number,
    group: string,
  };

  const persons: User[] = [
    {
      type: 'Работа',
      name: 'Иван Петров',
      age: 27,
      group: 'SEO-специалист',
    },
    {
      type: 'Работа',
      name: 'Марат Aляуддинов',
      age: 20,
      group: 'Музыкант',
    },
    {
      type: 'Работа',
      name: 'Андрей Вариков',
      age: 23,
      group: 'Веб-разработчик',
    },
    {
      type: 'Друзья',
      name: 'Василий Котиков',
      age: 29,
      group: 'Копирайтер'
    },
    {
      type: 'Семья',
      name: 'Юлия Гудина',
      age: 20,
      group: 'Дизайнер',
    }
  ];

  const logPerson = (person: User) => {
    console.log(`${person.name}, ${person.age}`);
  }

  console.log('Users:');
  persons.forEach(logPerson);
}
