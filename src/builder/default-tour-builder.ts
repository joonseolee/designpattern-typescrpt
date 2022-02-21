import { TourPlan } from './tour-plan';
import { TourPlanBuilder } from './tour-plan-builder';

export class DefaultTourBuilder implements TourPlanBuilder {
  private tourPlan: TourPlan = new TourPlan();

  constructor() {
    this.reset();
  }

  nightsAndDays(nights: number, days: number): TourPlanBuilder {
    this.tourPlan.nights = nights;
    this.tourPlan.days = days;
    return this;
  }

  title(title: string): TourPlanBuilder {
    this.tourPlan.title = title;
    return this;
  }

  startDate(date: Date): TourPlanBuilder {
    this.tourPlan.startDate = date;
    return this;
  }

  addPlan(day: number, plan: string): TourPlanBuilder {
    this.tourPlan.plans.set(day, plan);
    return this;
  }

  getTourPlan(): TourPlan {
    const it = this.tourPlan;
    this.reset();
    return it;
  }

  private reset(): void {
    this.tourPlan = new TourPlan();
  }
}
