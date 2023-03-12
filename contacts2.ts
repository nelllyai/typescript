{
  type User = {
    name: string,
    age: number,
    group: string,
  };


  type Admin = {
    name: string;
    age: number;
    role: string;
  }

  type Person = User | Admin;

  const persons: Person[] = [
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

  const logPerson = (user: User | Admin) => {
    console.log(`${user.name}, ${user.age}`);
  };

  persons.forEach(logPerson);
}