import { DefaultTourBuilder } from 'src/builder/default-tour-builder';
import { TourDirector } from 'src/builder/tour-director';

describe('builder pattern tests', () => {
  it('basic logic', () => {
    const builder: TourDirector = new TourDirector(new DefaultTourBuilder());
    const hawaiTour = builder.hawaiTrip();
    const busanTour = builder.busanTrip();

    expect(hawaiTour).not.toEqual(busanTour);
    expect(hawaiTour.title).toContain('hawai');
    expect(busanTour.title).toContain('busan');
  });
});
