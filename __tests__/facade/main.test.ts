import { Beverage } from 'src/facade/beverage';
import { Order } from 'src/facade/order';
import { VendingMachine } from 'src/facade/vending-machine';

describe('facade pattern tests', () => {
  it('basic logic', () => {
    const beverages = [
      new Beverage('cola', 300),
      new Beverage('hanta', 100),
      new Beverage('water', 400),
    ];
    const vendingMachine = new VendingMachine(beverages);
    const order = new Order([
      new Beverage('cola', 300),
      new Beverage('hanta', 100),
    ]);

    expect(() => vendingMachine.giveBeverages(order, 50)).toThrow(
      new Error('not enough money'),
    );
    expect(vendingMachine.giveBeverages(order, 1000)).toEqual([
      new Beverage('cola', 300),
      new Beverage('hanta', 100),
    ]);
  });
});
