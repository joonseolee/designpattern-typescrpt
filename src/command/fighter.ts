import { Command } from './command';

/**
 * Recevier
 */
export class Fighter {
  public doAttack(): string {
    return 'attack!';
  }

  public doEvade(): string {
    return 'evade!';
  }

  public doJump(): string {
    return 'jump!';
  }
}

/**
 * Invoker
 */
export class GamePalette {
  private attackCommand: Command;
  private evadeCommand: Command;
  private jumpCommand: Command;

  constructor(
    attackCommand: Command,
    evadeCommand: Command,
    jumpCommand: Command,
  ) {
    this.attackCommand = attackCommand;
    this.evadeCommand = evadeCommand;
    this.jumpCommand = jumpCommand;
  }

  public pressOne(): string {
    return this.attackCommand.execute();
  }

  public pressTwo(): string {
    return this.evadeCommand.execute();
  }

  public pressThree(): string {
    return this.jumpCommand.execute();
  }
}
