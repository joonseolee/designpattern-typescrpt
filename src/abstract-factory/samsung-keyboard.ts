import { Keyboard } from './keyboard';

export class SamsungKeyboard implements Keyboard {
  constructor() {
    console.log('Created Samsung keyboard');
  }
  operate(): void {
    console.log('Operated Samsung keyboard');
  }
}
