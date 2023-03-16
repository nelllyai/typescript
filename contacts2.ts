{
  interface User {
    type: 'user',
    name: string,
    age: number,
    group: string,
  };


  interface Admin {
    type: 'admin',
    name: string;
    age: number;
    role: string;
  }

  type Person = User | Admin;

  const persons: Person[] = [
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

  const isAdmin = (person: Person): person is Admin => {
    return person.type === 'admin';
  }

  const isUser = (person: Person): person is User => {
    return person.type === 'user';
  }

  const filterPersons = (persons: Person[], filter: (person: Person) => boolean): Person[] => {
    const personsList: Person[] = [];

    persons.forEach(person => {
      if (filter(person)) personsList.push(person);
    })

    return personsList;
  };

  const logPerson = (person: Person) => {
    let information: string = '';
    if (isAdmin(person)) {
      information = person.role;
    }
    if (isUser(person)) {
      information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
  }

  console.log('Admins:');
  filterPersons(persons, isAdmin).forEach(logPerson);

  console.log();

  console.log('Users:');
  filterPersons(persons, isUser).forEach(logPerson);
}
