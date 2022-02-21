import { LionAvatar, TigerAvatar } from 'src/bridge/avatar';
import { GuildMaster, User } from 'src/bridge/user';

describe('bridge pattern tests', () => {
  it('basic logic', () => {
    const personA = new User(new LionAvatar());
    const personB = new GuildMaster(new TigerAvatar());

    expect(personA.showMyProfile()).toContain('user');
    expect(personA.showMyProfile()).toContain('lion');
    expect(personB.showMyProfile()).toContain('master');
    expect(personB.showMyProfile()).toContain('tiger');
  });
});
