import { shallowMount } from '@vue/test-utils';
import Home from '@/ui/pages/Home.vue';

describe('Home', () => {
  const wrapper = shallowMount(Home);

  it('Should component name be equal file name', () => {
    // GIVEN
    const filename = 'Home';
    // THEN
    expect(Home.name).toBe(filename);
  });

  it('Should has resume component as dependency', () => {
    // THEN
    expect(Home.components).toHaveProperty('Resume');
  });

  describe('Data', () => {
    it('Should validate initial data values', () => {
      // GIVEN
      const user = {
        name: 'Fernando Moraes',
        profession: 'Full-Stack Developer',
        location: 'São Paulo',
      };
      // THEN
      expect(wrapper.vm.user).toEqual(user);
    });
  });
});
