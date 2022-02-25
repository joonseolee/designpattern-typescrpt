import { Beverage } from './beverage';
import { Order } from './order';

export class VendingMachine {
  constructor(public beverages: Beverage[]) {}

  public giveBeverages(order: Order, money: number): Beverage[] {
    const totalPrices = order.beverages
      .map((it) => it.price)
      .reduce((acc, cur) => acc + cur, 0);

    if (totalPrices > money) throw new Error('not enough money');

    return order.beverages;
  }
}
