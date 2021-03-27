import { Keyboard } from './keyboard';

export class LGKeyboard implements Keyboard {
  constructor() {
    console.log('Created LG Keyboard');
  }
  operate(): void {
    console.log('Operated LG Keyboard');
  }
}
