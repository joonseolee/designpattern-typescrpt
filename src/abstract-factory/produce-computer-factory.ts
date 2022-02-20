import { ComputerFactory } from './computer-factory';
export class ProduceComputerFactory {
  static createComputer(computerFactory: ComputerFactory) {
    return computerFactory.createComputer();
  }
}
