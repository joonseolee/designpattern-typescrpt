export class Player {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  public announce(): string {
    // eslint-disable-next-line quotes
    return `I'm ${this.name}`;
  }
}
