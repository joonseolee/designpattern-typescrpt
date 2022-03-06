import { Scientist, Teacher } from './component';

/**
 * visitor
 */
export interface Organization {
  giveMoneyToTeacher(teacher: Teacher): number;
  giveMoneyToScientist(scientist: Scientist): number;
}

/**
 * concrete visitor
 */
export class Guild implements Organization {
  giveMoneyToTeacher(teacher: Teacher): number {
    return 100;
  }
  giveMoneyToScientist(scientist: Scientist): number {
    return 1000;
  }
}
