import { Keyboard } from '../../src/abstract-factory/keyboard';
import { KeyboardFactory } from '../../src/abstract-factory/keyboard-factory';
import { LGKeyboard } from '../../src/abstract-factory/lg-keyboard';
import { SamsungKeyboard } from '../../src/abstract-factory/samsung-keyboard';

describe('abstract-factory pattern tests', () => {
  it('keyboard is a samsung keyboard.', () => {
    const keyboard: Keyboard = KeyboardFactory.createKeyboard('SAMSUNG');
    expect(keyboard).toBeInstanceOf(SamsungKeyboard);
  });
  it('keyboard is a lg keyboard.', () => {
    const keyboard: Keyboard = KeyboardFactory.createKeyboard('LG');
    expect(keyboard).toBeInstanceOf(LGKeyboard);
  });
});
