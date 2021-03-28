import { SamsungMouse } from 'src/abstract-factory/samsung-mouse';
import { Computer } from 'src/abstract-factory/computer';
import { SamsungKeyboard } from 'src/abstract-factory/samsung-keyboard';
import { ProduceComputerFactory } from 'src/abstract-factory/produce-computer-factory';
import { LGMouse } from 'src/abstract-factory/lg-mouse';
import { LGKeyboard } from 'src/abstract-factory/lg-keyboard';

describe('abstract-factory pattern tests', () => {
  it('generate samsung computer', () => {
    const samsungComputer: Computer = ProduceComputerFactory.createComputer(
      'SAMSUNG',
    );
    expect(samsungComputer.mouse).toBeInstanceOf(SamsungMouse);
    expect(samsungComputer.keyboard).toBeInstanceOf(SamsungKeyboard);
  });
  it('generate lg computer', () => {
    const lgComputer: Computer = ProduceComputerFactory.createComputer('LG');
    expect(lgComputer.mouse).toBeInstanceOf(LGMouse);
    expect(lgComputer.keyboard).toBeInstanceOf(LGKeyboard);
  });
});
