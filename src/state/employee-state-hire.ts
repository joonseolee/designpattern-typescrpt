import { Employee } from './employee';
import { EmployeeState } from './employee-state';

export class EmployeeStateHire implements EmployeeState {
  showEmployees(preEmployees: Employee[], employees: Employee[]): Employee[] {
    return preEmployees.concat(employees);
  }
}
