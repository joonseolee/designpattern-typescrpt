import { Product } from './product';

export abstract class Creator {
  public abstract factoryMethod(): Product;
}
