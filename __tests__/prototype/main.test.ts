import { Ball, ComponentWithBackReference } from 'src/prototype/ball';

describe('prototype pattern tests', () => {
  it('basic logic', () => {
    const adidasBall = new Ball();
    adidasBall.primitive = 'adidas ball(주)';
    adidasBall.component = new Date();
    adidasBall.circularReference = new ComponentWithBackReference(adidasBall);

    const copyBall = adidasBall.clone();

    expect(adidasBall.primitive === copyBall.primitive).toEqual(true);
    expect(adidasBall.component === copyBall.component).toEqual(false);
    expect(adidasBall.circularReference === copyBall.circularReference).toEqual(
      false,
    );
    expect(
      adidasBall.circularReference.prototype ===
        copyBall.circularReference.prototype,
    ).toEqual(false);
  });
});
