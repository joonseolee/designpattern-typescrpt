export type PersonType = 'M' | 'F';

export class Person {
  constructor(
    public name: string,
    public age: number,
    public sex: PersonType,
  ) {}

  isQualified(): boolean {
    if (this.age > 19 && this.sex === 'M') return true;
    return false;
  }
}
