import { NoncommissionedOfficer, Officer, Solider } from './solider';

export interface Mediator {
  notify(sender: Solider, event: string): void;
}

/**
 * 실질적인 중재자 역할하는 하는 객체
 */
export class CommunicateMediator implements Mediator {
  private officer: Officer;
  private nonOfficer: NoncommissionedOfficer;

  constructor(officer: Officer, nonOfficer: NoncommissionedOfficer) {
    this.officer = officer;
    this.officer.mediator = this;
    this.nonOfficer = nonOfficer;
    this.nonOfficer.mediator = this;
  }

  notify(sender: Solider, event: string): void {
    if (event.indexOf('sir') > -1) {
      this.nonOfficer.doBark();
    }

    if (event.indexOf('say') > -1) {
      this.officer.doYell();
    }
  }
}
