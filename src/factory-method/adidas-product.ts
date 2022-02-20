import { Product } from './product';

export class AdidasProduct implements Product {
  operation(): string {
    return 'adidas product';
  }
}
