import { Company } from './company';
import { Employee } from './employee';
import { EmployeeState } from './employee-state';

export class EmployeeStateNone implements EmployeeState {
  // context 를 가지고 있어야함.
  private company: Company;

  constructor(company: Company) {
    this.company = company;
  }

  showEmployees(preEmployees: Employee[], employees: Employee[]): Employee[] {
    return employees;
  }
}
