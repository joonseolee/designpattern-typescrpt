import { Employee } from './employee';
import { EmployeeState } from './employee-state';
import { EmployeeStateNone } from './employee-state-none';

export class Company {
  constructor(
    private preEmployees: Employee[],
    public employees: Employee[],
    public employeeState: EmployeeState = new EmployeeStateNone(),
  ) {}

  getCurrentEmployeeCount(): number {
    return this.employeeState.showEmployees(this.preEmployees, this.employees)
      .length;
  }
}
