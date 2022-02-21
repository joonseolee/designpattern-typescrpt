export interface Avatar {
  showImageUrl(): string;
}

// 추가 확장
export class LionAvatar implements Avatar {
  showImageUrl(): string {
    return 'lion image';
  }
}

// 추가 확장
export class TigerAvatar implements Avatar {
  showImageUrl(): string {
    return 'tiger image';
  }
}
