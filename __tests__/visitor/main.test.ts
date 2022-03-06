import { Adult, Scientist, Teacher } from 'src/visitor/component';
import { Guild, Organization } from 'src/visitor/visitor';

describe('visitor pattern tests', () => {
  it('basic logic', () => {
    const teacher: Adult = new Teacher();
    const scientist: Adult = new Scientist();
    const guild: Organization = new Guild();

    const teacherSalary: number = teacher.accept(guild);
    const scientistSalary: number = scientist.accept(guild);

    expect(teacherSalary).toBe(100);
    expect(scientistSalary).toBe(1000);
  });
});
