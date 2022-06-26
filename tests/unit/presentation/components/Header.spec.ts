import { mount, VueWrapper } from '@vue/test-utils';
import HeaderComponent from '@/presentation/components/Header.vue';

describe('Header component', () => {
  const factory = () => mount(HeaderComponent);
  let wrapper: VueWrapper;

  describe('When the component is mounted', () => {
    beforeEach(() => {
      // WHEN
      wrapper = factory();
    });

    it('Then should the name be HeaderComponent', () => {
      // THEN
      expect(wrapper.vm.$options.name).toBe('HeaderComponent');
    });

    it('Then should render a link logo with Fernando text', () => {
      const logo = wrapper.find('.header__link');
      // THEN
      expect(logo.text()).toBe('Fernando');
    });

    it('Then should render three links with LinkedIn, GitHub and E-mail texts', () => {
      const links = wrapper.findAll('.header__list__item__link');
      // THEN
      expect(links.length).toBe(3);
      expect(links[0].text()).toBe('LinkedIn');
      expect(links[1].text()).toBe('GitHub');
      expect(links[2].text()).toBe('E-mail');
    });
  });
});
