import { ComputerFactory } from './computer-factory';
import { Keyboard } from './keyboard';
import { Mouse } from './mouse';
import { SamsungKeyboard } from './samsung-keyboard';
import { SamsungMouse } from './samsung-mouse';

export class SamsungComputerFactory extends ComputerFactory {
  createKeyboard(): Keyboard {
    return new SamsungKeyboard();
  }
  createMouse(): Mouse {
    return new SamsungMouse();
  }
}
