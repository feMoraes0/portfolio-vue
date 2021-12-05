import { shallowMount } from '@vue/test-utils';
import Home from '@/ui/pages/Home.vue';

describe('Home', () => {
  const wrapper = shallowMount(Home);

  it('Should component name be equal file name', () => {
    // GIVEN
    const filename = 'Home';
    // THEN
    expect(wrapper.name()).toBe(filename);
  });
});
