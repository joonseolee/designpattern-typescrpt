import { Subject } from './game-supervisor';

export interface Observer {
  update(gameSupervisor: Subject): void;
}

export class Participant implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(gameSupervisor: Subject): void {
    console.log(`${this.name}: 달린다.`);
  }
}
