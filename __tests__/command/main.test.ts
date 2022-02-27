import {
  FighterAttackCommand,
  FighterEvadeCommand,
  FighterJumpCommand,
} from 'src/command/command';
import { Fighter, GamePalette } from 'src/command/fighter';

describe('command pattern tests', () => {
  it('basic logic', () => {
    const fighter = new Fighter();
    const attackCommand = new FighterAttackCommand(fighter);
    const evadeCommand = new FighterEvadeCommand(fighter);
    const jumpCommand = new FighterJumpCommand(fighter);
    const gamePalette = new GamePalette(
      attackCommand,
      evadeCommand,
      jumpCommand,
    );

    expect(gamePalette.pressOne()).toBe('attack!');
    expect(gamePalette.pressTwo()).toBe('evade!');
    expect(gamePalette.pressThree()).toBe('jump!');
  });
});
