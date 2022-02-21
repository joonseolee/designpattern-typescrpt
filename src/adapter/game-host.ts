export class GameHost {
  private hostName: string;

  constructor(hostName = '') {
    this.hostName = hostName;
  }

  public say(): string {
    return `Hi I'm ${this.hostName}`;
  }
}
