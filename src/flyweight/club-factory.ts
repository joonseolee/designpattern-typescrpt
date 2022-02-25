import { Club } from './club';
import { ClubMember } from './club-member';

export class ClubFactory {
  private clubMap: Map<string, Club> = new Map();

  constructor(clubs: Club[]) {
    clubs.forEach((it) => this.clubMap.set(it.name, it));
  }

  public getClub(clubName: string, clubMembers: ClubMember[] = []): Club {
    if (!this.clubMap.has(clubName))
      this.clubMap.set(clubName, new Club(clubName, clubMembers));
    return this.clubMap.get(clubName) as Club;
  }
}
