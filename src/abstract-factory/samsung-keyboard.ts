import { Keyboard } from './keyboard';

export class SamsungKeyboard implements Keyboard {
  operate(): void {
    console.log('Operated Samsung keyboard');
  }
}
