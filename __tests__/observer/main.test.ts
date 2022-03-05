import { GameSupervisor, Subject } from 'src/observer/game-supervisor';
import { Observer, Participant } from 'src/observer/participant';

describe('observer pattern tests', () => {
  it('basic logic', () => {
    const gameSupervisor: Subject = new GameSupervisor();
    const person1: Observer = new Participant('joon');
    const person2: Observer = new Participant('bark');
    const person3: Observer = new Participant('kim');

    gameSupervisor.attach(person1);
    gameSupervisor.attach(person2);
    gameSupervisor.attach(person3);

    gameSupervisor.notify();

    gameSupervisor.detach(person2);
    console.log('-------');

    gameSupervisor.notify();
  });
});
