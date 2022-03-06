import { Organization } from './visitor';

export interface Adult {
  accept(organization: Organization): number;
}

export class Teacher implements Adult {
  accept(origanization: Organization): number {
    return origanization.giveMoneyToTeacher(this);
  }
}

export class Scientist implements Adult {
  accept(origanization: Organization): number {
    return origanization.giveMoneyToScientist(this);
  }
}
