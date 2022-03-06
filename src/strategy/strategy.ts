export interface RankStrategy {
  introduce(): string;
}

/**
 * concrete strategy
 */
export class GoldRank implements RankStrategy {
  introduce(): string {
    return 'gold';
  }
}

/**
 * concrete strategy
 */
export class SilverRank implements RankStrategy {
  introduce(): string {
    return 'silver';
  }
}
