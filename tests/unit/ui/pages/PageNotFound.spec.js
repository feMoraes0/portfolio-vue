import { shallowMount } from '@vue/test-utils';
import PageNotFound from '@/ui/pages/PageNotFound.vue';

describe('PageNotFound', () => {
  const wrapper = shallowMount(PageNotFound);

  it('Should component name be equal file name', () => {
    // GIVEN
    const filename = 'PageNotFound';
    // THEN
    expect(wrapper.name()).toBe(filename);
  });
});
