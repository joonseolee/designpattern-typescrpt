import { Person, PersonType } from './person';

export class Engineer extends Person {
  constructor(public name: string, public age: number, public sex: PersonType) {
    super(name, age, sex);
  }
}
