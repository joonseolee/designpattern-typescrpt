import { Mouse } from './mouse';

export class LGMouse implements Mouse {
  constructor() {
    console.log('Created LG Mouse');
  }
  operate(): void {
    console.log('Operated LG Mouse.');
  }
}
