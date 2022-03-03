import { WordCollection } from './aggregator';

export interface StepIterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class AlphabeticalIterator implements StepIterator<string> {
  private collection: WordCollection;
  private position = 0;

  constructor(collection: WordCollection) {
    this.collection = collection;
  }

  hasNext(): boolean {
    return this.collection.getCount() > this.position;
  }

  next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += 1;
    return item;
  }
}
