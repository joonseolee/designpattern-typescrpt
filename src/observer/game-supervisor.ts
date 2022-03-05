import { Observer } from './participant';

export interface Subject {
  attach(participant: Observer): void;
  detach(participant: Observer): void;
  notify(): void;
}

/**
 * concrete subject
 */
export class GameSupervisor implements Subject {
  private participants: Observer[] = [];

  attach(participant: Observer): void {
    if (this.participants.includes(participant)) return;
    this.participants.push(participant);
  }

  detach(participant: Observer): void {
    if (!this.participants.includes(participant)) return;
    const index = this.participants.indexOf(participant);
    this.participants.splice(index, 1);
  }

  notify(): void {
    console.log('game start');
    for (const observer of this.participants) {
      observer.update(this);
    }
  }
}
