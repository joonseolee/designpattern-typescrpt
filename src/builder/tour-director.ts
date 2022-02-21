import { TourPlan } from './tour-plan';
import { TourPlanBuilder } from './tour-plan-builder';

export class TourDirector {
  constructor(public builder: TourPlanBuilder) {}

  hawaiTrip(): TourPlan {
    return this.builder
      .title('hawai')
      .startDate(new Date())
      .nightsAndDays(3, 4)
      .addPlan(1, '재밋게 놀기')
      .getTourPlan();
  }

  busanTrip(): TourPlan {
    return this.builder
      .title('busan')
      .startDate(new Date())
      .nightsAndDays(1, 2)
      .addPlan(1, '인사하기')
      .getTourPlan();
  }
}
