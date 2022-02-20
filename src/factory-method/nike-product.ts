import { Product } from './product';

export class NikeProduct implements Product {
  operation(): string {
    return 'nike product';
  }
}
