import { Mediator } from './mediator';

export class Solider {
  protected _mediator?: Mediator;

  constructor(mediator?: Mediator) {
    this._mediator = mediator;
  }

  set mediator(mediator: Mediator) {
    this._mediator = mediator;
  }
}

export class NoncommissionedOfficer extends Solider {
  public doBark(): void {
    console.log('yes sir!');
    this._mediator?.notify(this, '');
  }

  public doNothing(): void {
    console.log('Slient....');
    this._mediator?.notify(this, 'slient..');
  }
}

export class Officer extends Solider {
  public doSay(): void {
    console.log('I hope you do this.');
    this._mediator?.notify(this, 'sir!');
  }

  public doYell(): void {
    console.log('!!!!!');
    this._mediator?.notify(this, '!!!');
  }
}
