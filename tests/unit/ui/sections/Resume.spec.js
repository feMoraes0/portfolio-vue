import Resume from '@/ui/sections/Resume.vue';

describe('Resume', () => {
  it('Should the component name be equal file name', () => {
    // GIVEN
    const filename = 'Resume';
    // THEN
    expect(Resume.name).toBe(filename);
  });
});
