import { mount } from '@vue/test-utils';
import LabelComponent from '@/presentation/components/LabelComponent.vue';

describe('Label Component', () => {
  const factory = (props) => mount(LabelComponent, {
    propsData: props,
  });

  let wrapper = null;

  describe('Given any text as props, when the component is mounted', () => {
    // GIVEN
    const props = {
      text: 'any_text',
    };

    beforeEach(() => {
      // WHEN
      wrapper = factory(props);
    });

    it('Then should validate props type and requirement', () => {
      // THEN
      expect(wrapper.props('text')).toBe(props.text);
    });

    it('Then should props be rendered', () => {
      // THEN
      const textComponent = wrapper.findComponent('span');
      expect(textComponent.text()).toBe(props.text);
    });
  });
});
