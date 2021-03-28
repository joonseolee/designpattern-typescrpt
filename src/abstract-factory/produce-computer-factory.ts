import { ComputerFactory } from './computer-factory';
import { FactoryType } from './factory-type';
import { LGComputerFactory } from './lg-computer-factory';
import { SamsungComputerFactory } from './samsung-computer-factory';

export class ProduceComputerFactory {
  static createComputer(type: FactoryType) {
    let computerFactory: ComputerFactory;
    switch (type) {
      case 'LG':
        computerFactory = new LGComputerFactory();
        break;
      case 'SAMSUNG':
        computerFactory = new SamsungComputerFactory();
        break;
      default:
        throw new Error('Not matched computer company');
    }
    return computerFactory.createComputer();
  }
}
