import { Employee } from './employee';
import { EmployeeState } from './employee-state';

export class EmployeeStateNone implements EmployeeState {
  showEmployees(preEmployees: Employee[], employees: Employee[]): Employee[] {
    return employees;
  }
}
