import { RankStrategy } from './strategy';

/**
 * context
 */
export class Dualist {
  private name: string;
  private _rankStrategy: RankStrategy;

  constructor(name: string, _rankStrategy: RankStrategy) {
    this.name = name;
    this._rankStrategy = _rankStrategy;
  }

  public showProfile(): string {
    return `${this.name}: ${this._rankStrategy.introduce()}`;
  }

  set rankStrategy(rankStrategy: RankStrategy) {
    this._rankStrategy = rankStrategy;
  }
}
