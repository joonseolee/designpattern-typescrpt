import { Memento, MineSweeperBoardMemento } from './memento';

export type MineSweeperBoard = number[][];

/**
 * originator
 */
export class MineSweeperClient {
  private _mines: MineSweeperBoard;

  constructor() {
    // sample
    this._mines = [
      [0, 0, 1],
      [1, 1, 1],
    ];
  }

  get mines(): MineSweeperBoard {
    return JSON.parse(JSON.stringify(this._mines));
  }

  public doUpdate(x: number, y: number, value: number) {
    this._mines[x][y] = value;
  }

  public save(): Memento {
    return new MineSweeperBoardMemento(JSON.parse(JSON.stringify(this._mines)));
  }

  public load(storedBoard: Memento) {
    this._mines = storedBoard.getMineSweeperBoard();
  }
}

/**
 * careTaker
 */
export class MineSweeperMachine {
  private mementos: Memento[] = [];
  private originator: MineSweeperClient;

  constructor(originator: MineSweeperClient) {
    this.originator = originator;
  }

  public backup(): void {
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (this.mementos.length === 0) return;

    const memento = this.mementos.pop();
    if (!memento) return;

    this.originator.load(memento);
  }
}
