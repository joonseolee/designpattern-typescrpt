import { LuckyBox } from './lucky-box';

export class LuckyBoxBeteranProxy extends LuckyBox {
  private luckyBox: LuckyBox;

  constructor() {
    super();
    this.luckyBox = new LuckyBox();
  }

  /**
   * 100 이하의 숫자 출력
   * @returns 100 이하의 숫자
   */
  public showRandomNumber(): number {
    const number = this.luckyBox.showRandomNumber();
    return Math.floor(number * 100);
  }
}
