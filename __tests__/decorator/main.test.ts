import {
  NormalWizardDecorator,
  UniqueWizardDecorator,
} from 'src/decorator/decorator';
import { Equipment, HeadEquipment } from 'src/decorator/equipment';

describe('decorator pattern tests', () => {
  it('basic logic', () => {
    const headEquipment: Equipment = new HeadEquipment();
    const normalWizard: Equipment = new NormalWizardDecorator(headEquipment);
    const uniqueWizard: Equipment = new UniqueWizardDecorator(headEquipment);
    const multipleWizard: Equipment = new UniqueWizardDecorator(normalWizard);

    expect(headEquipment.operation()).toBe(1.1);
    expect(normalWizard.operation()).toBe(1.32);
    expect(+uniqueWizard.operation().toFixed(2)).toBe(1.43);
    expect(+multipleWizard.operation().toFixed(2)).toBe(1.72);
  });
});
