import { Mouse } from './mouse';

export class SamsungMouse implements Mouse {
  operate(): void {
    console.log('operated samsung mouse');
  }
}
