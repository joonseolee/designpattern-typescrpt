import { Computer } from './computer';
import { Keyboard } from './keyboard';
import { Mouse } from './mouse';

export abstract class ComputerFactory {
  abstract createKeyboard(): Keyboard;
  abstract createMouse(): Mouse;
  createComputer(): Computer {
    return new Computer(this.createMouse(), this.createKeyboard());
  }
}
