import { shallowMount } from '@vue/test-utils';
import Resume from '@/ui/sections/Resume.vue';

describe('Resume', () => {
  const user = {
    name: 'name_test',
    profession: 'profession_test',
    location: 'location_test',
  };

  const wrapper = shallowMount(Resume, {
    propsData: {
      user,
    },
  });

  it('Should the component name be equal file name', () => {
    // GIVEN
    const filename = 'Resume';
    // THEN
    expect(Resume.name).toBe(filename);
  });

  describe('Props', () => {
    it('Should validate user props requirenment and type', () => {
      // THEN
      expect(Resume.props.user.type).toBe(Object);
      expect(Resume.props.user.required).toBe(true);
    });

    it('Should validate props user initial value', () => {
      // THEN
      expect(wrapper.props().user).toEqual(user);
    });
  });
});
