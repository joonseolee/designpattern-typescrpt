import { AdidasProduct } from './adidas-product';
import { Creator } from './creator';
import { Product } from './product';

export class AdidasCreator extends Creator {
  public factoryMethod(): Product {
    return new AdidasProduct();
  }
}
