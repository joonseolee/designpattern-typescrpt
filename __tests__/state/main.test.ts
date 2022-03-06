import { Company } from 'src/state/company';
import { Employee } from 'src/state/employee';
import { EmployeeStateHire } from 'src/state/employee-state-hire';

describe('state pattern tests', () => {
  it('basic logic', () => {
    const preEmployees: Employee[] = [
      { name: 'Kim', age: 12 },
      { name: 'Lee', age: 13 },
      { name: 'Park', age: 14 },
      { name: 'Cho', age: 15 },
    ];
    const employees: Employee[] = [
      { name: 'Oh', age: 16 },
      { name: 'Pang', age: 2 },
      { name: 'Woo', age: 17 },
      { name: 'Sang', age: 18 },
    ];
    const lgCompany: Company = new Company(preEmployees, employees);

    expect(lgCompany.getCurrentEmployeeCount()).toBe(4);
    lgCompany.employeeState = new EmployeeStateHire(lgCompany);
    expect(lgCompany.getCurrentEmployeeCount()).toBe(8);
  });
});
