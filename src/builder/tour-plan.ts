export class TourPlan {
  public plans: Map<number, string>;
  constructor(
    public nights?: number,
    public days?: number,
    public title?: string,
    public startDate?: Date,
  ) {
    this.plans = new Map<number, string>();
  }
}
