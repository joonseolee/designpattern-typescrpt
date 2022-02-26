import {
  MonkeyCompanyHandler,
  MonkeyHandler,
  MonkeyProducerHandler,
  MonkeyStaffHandler,
} from 'src/chain-of-responsibility/monkey-handler';

describe('chain of responsibility pattern tests', () => {
  it('basic logic', () => {
    const monkeyChain = new MonkeyHandler(
      new MonkeyStaffHandler(
        new MonkeyProducerHandler(new MonkeyCompanyHandler(null)),
      ),
    );

    expect(monkeyChain.handle('company')).toBe('company -> monkey is present');
    expect(monkeyChain.handle('staff')).toBe('staff -> monkey is present');
  });
});
