import { Employee } from './employee';

export interface EmployeeState {
  showEmployees(preEmployees: Employee[], employees: Employee[]): Employee[];
}
