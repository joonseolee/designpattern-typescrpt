import { ClubMember } from './club-member';

export class Club {
  constructor(public name: string, public clubMembers?: ClubMember[]) {}
}
