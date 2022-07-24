import { mount } from '@vue/test-utils';
import CardComponent from '@/presentation/components/CardComponent.vue';

describe('Card Component', () => {
  const factory = () => mount(CardComponent);

  it('When the component is mounted, then should find a section with card class', () => {
    // WHEN
    const wrapper = factory();
    // THEN
    const component = wrapper.findComponent('section');
    expect(component.classes()).toContain('card');
  });
});
