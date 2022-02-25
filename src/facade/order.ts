import { Beverage } from './beverage';

export class Order {
  constructor(public beverages: Beverage[]) {}
}
