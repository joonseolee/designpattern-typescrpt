import { Creator } from './creator';
import { NikeProduct } from './nike-product';
import { Product } from './product';

export class NikeCreator extends Creator {
  public factoryMethod(): Product {
    return new NikeProduct();
  }
}
