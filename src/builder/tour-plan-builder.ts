import { TourPlan } from './tour-plan';

export interface TourPlanBuilder {
  nightsAndDays(nights: number, days: number): TourPlanBuilder;
  title(title: string): TourPlanBuilder;
  startDate(date: Date): TourPlanBuilder;
  addPlan(day: number, plan: string): TourPlanBuilder;
  getTourPlan(): TourPlan;
}
