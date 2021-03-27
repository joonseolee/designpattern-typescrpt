import { Keyboard } from './keyboard';
import { LGKeyboard } from './lg-keyboard';
import { SamsungKeyboard } from './samsung-keyboard';

export type keyboardFactoryType = 'LG' | 'SAMSUNG';

export class KeyboardFactory {
  public static createKeyboard(type: keyboardFactoryType): Keyboard {
    let keyboard: Keyboard;
    switch (type) {
      case 'LG':
        keyboard = new LGKeyboard();
        break;
      case 'SAMSUNG':
        keyboard = new SamsungKeyboard();
        break;
      default:
        throw new Error('Not matched keyboardFactory type');
    }
    return keyboard;
  }
}
