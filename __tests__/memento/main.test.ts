import {
  MineSweeperBoard,
  MineSweeperClient,
  MineSweeperMachine,
} from 'src/memento/mine-sweeper';

describe('memento pattern tests', () => {
  it('basic logic', () => {
    const client = new MineSweeperClient();
    const mineMachine = new MineSweeperMachine(client);
    const initializedBoard: MineSweeperBoard = client.mines;

    mineMachine.backup();
    client.doUpdate(0, 0, 3);
    const operatedBoard: MineSweeperBoard = client.mines;
    mineMachine.undo();
    const restoredBoard = client.mines;

    expect(initializedBoard).toStrictEqual(restoredBoard);
    expect(operatedBoard[0][0]).toBe(3);
  });
});
