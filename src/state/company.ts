import { Employee } from './employee';
import { EmployeeState } from './employee-state';
import { EmployeeStateNone } from './employee-state-none';

export class Company {
  private preEmployees: Employee[];
  public employees: Employee[];
  public employeeState: EmployeeState = new EmployeeStateNone(this);

  constructor(preEmployees: Employee[], employees: Employee[]) {
    this.preEmployees = preEmployees;
    this.employees = employees;
  }

  getCurrentEmployeeCount(): number {
    return this.employeeState.showEmployees(this.preEmployees, this.employees)
      .length;
  }
}
