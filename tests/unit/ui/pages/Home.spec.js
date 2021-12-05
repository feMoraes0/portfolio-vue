import Home from '@/ui/pages/Home.vue';

describe('Home', () => {
  it('Should component name be equal file name', () => {
    // GIVEN
    const filename = 'Home';
    // THEN
    expect(Home.name).toBe(filename);
  });
});
