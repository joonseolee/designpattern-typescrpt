import { MineSweeperBoard } from './mine-sweeper';

export interface Memento {
  getMineSweeperBoard(): MineSweeperBoard;
}

export class MineSweeperBoardMemento implements Memento {
  private storedBoard?: MineSweeperBoard;

  constructor(storedBoard?: MineSweeperBoard) {
    this.storedBoard = storedBoard;
  }

  getMineSweeperBoard(): MineSweeperBoard {
    if (!this.storedBoard) throw Error('none of stored board.');

    return this.storedBoard;
  }
}
