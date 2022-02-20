import { Creator } from './creator';
import { Product } from './product';

export class Factory {
  public static getProduct(creator: Creator): Product {
    return creator.factoryMethod();
  }
}
