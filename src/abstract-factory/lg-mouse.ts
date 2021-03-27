import { Mouse } from './mouse';

export class LGMouse implements Mouse {
  operate(): void {
    console.log('Operated LG Mouse.');
  }
}
