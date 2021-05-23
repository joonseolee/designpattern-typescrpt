import { FileComponent } from './file-component';

export class File implements FileComponent {
  constructor(private _name: string) {}

  getName(): string {
    return this._name;
  }

  getFileNames(): string[] {
    return [this.getName()];
  }
}
