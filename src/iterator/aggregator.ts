import { AlphabeticalIterator, StepIterator } from './iterator';

export interface StepAggregator {
  getIterator(): StepIterator<string>;
}

export class WordCollection implements StepAggregator {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  getIterator(): StepIterator<string> {
    return new AlphabeticalIterator(this);
  }
}
