import { FactoryType } from './factory-type';
import { LGMouse } from './lg-mouse';
import { Mouse } from './mouse';
import { SamsungMouse } from './samsung-mouse';

export class MouseFactory {
  static createMouse(type: FactoryType): Mouse {
    let mouse: Mouse;
    switch (type) {
      case 'LG':
        mouse = new LGMouse();
        break;
      case 'SAMSUNG':
        mouse = new SamsungMouse();
        break;
      default:
        throw new Error('Not matched mouseType');
    }
    return mouse;
  }
}
