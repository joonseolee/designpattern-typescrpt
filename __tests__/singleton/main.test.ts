import { Printer, Pen } from 'src/singleton/printer';

describe('singleton pattern tests', () => {
  it('basic logic', () => {
    const singleton1 = Printer.getInstance();
    const singleton2 = Printer.getInstance();

    const pen1 = new Pen();
    const pen2 = new Pen();

    expect(singleton1).toEqual(singleton2);
    expect(singleton1).toBe(singleton2);

    expect(pen1).toEqual(pen2);
    expect(pen1).not.toBe(pen2);
  });
});
