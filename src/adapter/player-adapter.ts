import { GameHost } from './game-host';
import { Player } from './player';

export class PlayerAdapter extends GameHost {
  private player: Player;

  constructor(player: Player) {
    super();
    this.player = player;
  }

  public say(): string {
    return this.player.announce();
  }
}
