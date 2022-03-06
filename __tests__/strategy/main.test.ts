import { Dualist } from 'src/strategy/dualist';
import { GoldRank, SilverRank } from 'src/strategy/strategy';

describe('strategy pattern tests', () => {
  it('basic logic', () => {
    const dualist = new Dualist('joon', new SilverRank());

    expect(dualist.showProfile()).toContain('silver');
    dualist.rankStrategy = new GoldRank();
    expect(dualist.showProfile()).toContain('gold');
  });
});
