import { Computer } from './computer';
import { FactoryType } from './factory-type';
import { Keyboard } from './keyboard';
import { KeyboardFactory } from './keyboard-factory';
import { Mouse } from './mouse';
import { MouseFactory } from './mouse-factory';

export class ComputerFactory {
  static createComputer(type: FactoryType) {
    const keyboard: Keyboard = KeyboardFactory.createKeyboard(type);
    const mouse: Mouse = MouseFactory.createMouse(type);
    // 부품추가에 따라 계속 늘어남.
    return new Computer(mouse, keyboard);
  }
}
