import PageNotFound from '@/ui/pages/PageNotFound.vue';

describe('PageNotFound', () => {
  it('Should component name be equal file name', () => {
    // GIVEN
    const filename = 'PageNotFound';
    // THEN
    expect(PageNotFound.name).toBe(filename);
  });
});
