import { ComputerFactory } from './computer-factory';
import { Keyboard } from './keyboard';
import { LGKeyboard } from './lg-keyboard';
import { LGMouse } from './lg-mouse';
import { Mouse } from './mouse';

export class LGComputerFactory extends ComputerFactory {
  createKeyboard(): Keyboard {
    return new LGKeyboard();
  }
  createMouse(): Mouse {
    return new LGMouse();
  }
}
