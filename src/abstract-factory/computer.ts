import { Keyboard } from './keyboard';
import { Mouse } from './mouse';

export class Computer {
  constructor(public mouse: Mouse, public keyboard: Keyboard) {}

  doAction(): void {
    this.mouse.operate();
    this.keyboard.operate();
  }
}
