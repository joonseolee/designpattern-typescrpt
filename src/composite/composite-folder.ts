import { FileComponent } from './file-component';

export class CompositeFolder implements FileComponent {
  constructor(public _name: string, public _files: FileComponent[] = []) {}

  getName(): string {
    return this._name;
  }

  /**
   * 가지고 있는 파일(파일 + 폴더) 이름가져오기
   * @returns 이름 리스트
   */
  getFileNames(): string[] {
    const fileNames: string[] = this._files
      .map((file) => file.getName())
      .reduce(
        (nameList: string[], name) => {
          nameList.push(name);
          return nameList;
        },
        [this.getName()],
      );
    return fileNames;
  }
}
