import { Users } from "./Users";

interface Student {
  id: number;
  firstName: string;
  surname: string;
  age: number;
  year: number;
  speciality: string;
};

export class Students extends Users<Student> { };
