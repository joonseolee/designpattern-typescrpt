import { AdidasCreator } from 'src/factory-method/adidas-creator';
import { Factory } from 'src/factory-method/factory';
import { NikeCreator } from 'src/factory-method/nike-creator';

describe('factory-method pattern tests', () => {
  it('basic logic', () => {
    const adidasLabel = Factory.getProduct(new AdidasCreator()).operation();
    const nikeLabel = Factory.getProduct(new NikeCreator()).operation();

    expect(adidasLabel).toEqual('adidas product');
    expect(nikeLabel).toEqual('nike product');
  });
});
