import { WordCollection } from 'src/iterator/aggregator';

describe('iterator pattern tests', () => {
  it('basic logic', () => {
    const collection = new WordCollection();
    collection.addItem('aWord');
    collection.addItem('bWord');
    collection.addItem('cWord');
    const iterator = collection.getIterator();

    let count = 0;
    while (iterator.hasNext()) {
      expect(iterator.next()).toContain('Word');
      count++;
    }
    expect(count).toBe(3);
  });
});
