import { AdidasCreator } from 'src/factory-method/adidas-creator';
import { Factory } from 'src/factory-method/factory';
import { NikeCreator } from 'src/factory-method/nike-creator';
import { Club } from 'src/flyweight/club';
import { ClubFactory } from 'src/flyweight/club-factory';
import { ClubMember } from 'src/flyweight/club-member';

describe('flyweight pattern tests', () => {
  it('basic logic', () => {
    const club1 = new Club('soccerClub', [
      new ClubMember('gildong'),
      new ClubMember('ayan'),
      new ClubMember('yungi'),
    ]);
    const club2 = new Club('baseballClub', [
      new ClubMember('bob'),
      new ClubMember('hila'),
      new ClubMember('maeq'),
    ]);

    const clubFactory: ClubFactory = new ClubFactory([club1, club2]);

    expect(clubFactory.getClub('soccerClub')).toBe(club1);
    expect(clubFactory.getClub('fakeClub')).toEqual(new Club('fakeClub', []));
    expect(clubFactory.getClub('fakeClub')).not.toBe(new Club('fakeClub'));
  });
});
