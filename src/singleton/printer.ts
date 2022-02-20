export class Printer {
  private static INSTANCE: Printer;

  private Printer() {
    // do nothing
  }

  public static getInstance(): Printer {
    if (!this.INSTANCE) {
      this.INSTANCE = new Printer();
    }
    return this.INSTANCE;
  }

  public printAvailableUse(): string {
    return Math.random() % 2 === 0
      ? 'you can use this printer'
      : 'you cannot use this printer, please wait';
  }
}

export class Pen {
  public Pen() {
    // do nothing
  }
}
