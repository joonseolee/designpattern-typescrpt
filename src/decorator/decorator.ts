import { Equipment } from './equipment';

export class EquipmentDecorator implements Equipment {
  protected component: Equipment;

  constructor(component: Equipment) {
    this.component = component;
  }
  operation(): number {
    return this.component.operation();
  }
}

export class NormalWizardDecorator extends EquipmentDecorator {
  constructor(component: Equipment) {
    super(component);
  }

  operation(): number {
    return this.component.operation() * 1.2;
  }
}

export class UniqueWizardDecorator extends EquipmentDecorator {
  constructor(component: Equipment) {
    super(component);
  }

  operation(): number {
    return this.component.operation() * 1.3;
  }
}
