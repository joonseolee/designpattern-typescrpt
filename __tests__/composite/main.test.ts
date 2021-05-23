import { CompositeFolder } from 'src/composite/composite-folder';
import { File } from 'src/composite/file';
import { FileComponent } from 'src/composite/file-component';

describe('composite pattern tests', () => {
  it('basic logic', () => {
    const aFile: FileComponent = new File('aFile');
    const bFile: FileComponent = new File('bFile');
    const abFolder: FileComponent = new CompositeFolder('abFolder', [
      aFile,
      bFile,
    ]);
    const cFile: FileComponent = new File('cFile');
    const cFolder: FileComponent = new CompositeFolder('cFolder', [cFile]);
    const dFile: FileComponent = new File('dFile');
    const eFile: FileComponent = new File('eFile');
    const rootFolder: FileComponent = new CompositeFolder('rootFolder', [
      abFolder,
      cFolder,
      dFile,
      eFile,
    ]);

    expect(rootFolder.getFileNames().length).toEqual(5);
    expect(rootFolder.getFileNames()).toContainEqual('abFolder');
  });
});
