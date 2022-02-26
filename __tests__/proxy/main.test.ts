import { LuckyBox } from 'src/proxy/lucky-box';
import { LuckyBoxBeteranProxy } from 'src/proxy/lucky-box-beteran-proxy';
import { LuckyBoxNoviceProxy } from 'src/proxy/lucky-box-novice-proxy';

describe('proxy pattern tests', () => {
  it('basic logic', () => {
    const luckyBoxNoviceProxy: LuckyBox = new LuckyBoxNoviceProxy();
    const luckyBoxVeteranProxy: LuckyBox = new LuckyBoxBeteranProxy();

    expect(luckyBoxNoviceProxy.showRandomNumber()).toBeGreaterThanOrEqual(0);
    expect(luckyBoxNoviceProxy.showRandomNumber()).toBeLessThanOrEqual(10);
    expect(luckyBoxVeteranProxy.showRandomNumber()).toBeGreaterThanOrEqual(0);
    expect(luckyBoxVeteranProxy.showRandomNumber()).toBeLessThanOrEqual(100);
  });
});
