import { GameHost } from 'src/adapter/game-host';
import { Player } from 'src/adapter/player';
import { PlayerAdapter } from 'src/adapter/player-adapter';

describe('adapter pattern tests', () => {
  it('basic logic', () => {
    const player = new Player('joon');
    const playerAdapter: GameHost = new PlayerAdapter(player);
    const gameHost = new GameHost('joon');

    expect(playerAdapter.say()).toContain('joon');
    expect(gameHost.say()).toContain('joon');
    expect(playerAdapter instanceof GameHost).toEqual(true);
    expect(gameHost instanceof GameHost).toEqual(true);
  });
});
