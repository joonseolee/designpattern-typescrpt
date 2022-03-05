import { CommunicateMediator, Mediator } from 'src/mediator/mediator';
import { NoncommissionedOfficer, Officer } from 'src/mediator/solider';

describe('mediator pattern tests', () => {
  it('basic logic', () => {
    const officer = new Officer();
    const nonOfficer = new NoncommissionedOfficer();
    const mediator: Mediator = new CommunicateMediator(officer, nonOfficer);

    officer.doSay();
    nonOfficer.doNothing();
    mediator.notify(officer, 'qq');
  });
});
