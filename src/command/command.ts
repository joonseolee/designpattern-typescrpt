import { Fighter } from './fighter';

export interface Command {
  execute(): string;
}

export class FighterAttackCommand implements Command {
  private fighter: Fighter;

  constructor(fighter: Fighter) {
    this.fighter = fighter;
  }

  execute(): string {
    return this.fighter.doAttack();
  }
}

export class FighterEvadeCommand implements Command {
  private fighter: Fighter;

  constructor(fighter: Fighter) {
    this.fighter = fighter;
  }

  execute(): string {
    return this.fighter.doEvade();
  }
}

export class FighterJumpCommand implements Command {
  private fighter: Fighter;

  constructor(fighter: Fighter) {
    this.fighter = fighter;
  }

  execute(): string {
    return this.fighter.doJump();
  }
}
