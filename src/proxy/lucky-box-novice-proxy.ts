import { LuckyBox } from './lucky-box';

export class LuckyBoxNoviceProxy extends LuckyBox {
  private luckyBox: LuckyBox;

  constructor() {
    super();
    this.luckyBox = new LuckyBox();
  }

  /**
   * 10 이하의 숫자 출력
   * @returns 10 이하의 숫자
   */
  public showRandomNumber(): number {
    const number = this.luckyBox.showRandomNumber();
    return Math.floor(number * 10);
  }
}
