import { Keyboard } from './keyboard';

export class LGKeyboard implements Keyboard {
  operate(): void {
    console.log('Operated LG Keyboard');
  }
}
