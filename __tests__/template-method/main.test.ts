import { Doctor } from 'src/template-method/Doctor';
import { Engineer } from 'src/template-method/Engineer';
import { Person } from 'src/template-method/person';

describe('template-method pattern tests', () => {
  it('basic template method', () => {
    const doctor1: Doctor = new Person('jj', 33, 'F');
    const doctor2: Doctor = new Person('dd', 18, 'M');
    const engineer1: Engineer = new Person('vv', 23, 'M');
    const engineer2: Engineer = new Person('zz', 43, 'F');

    expect(doctor1.isQualified()).toBe(false);
    expect(doctor2.isQualified()).toBe(false);
    expect(engineer1.isQualified()).toBe(true);
    expect(engineer2.isQualified()).toBe(false);
  });
});
