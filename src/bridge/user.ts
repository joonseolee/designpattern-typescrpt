import { Avatar } from './avatar';

export class User {
  protected implementation: Avatar;

  constructor(implementation: Avatar) {
    this.implementation = implementation;
  }

  public showMyProfile(): string {
    const result = this.implementation.showImageUrl();
    return `user - ${result}`;
  }
}

// 추가 확장
export class GuildMaster extends User {
  public showMyProfile(): string {
    const result = this.implementation.showImageUrl();
    return `master - ${result}`;
  }
}
