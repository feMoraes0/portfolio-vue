import App from '@/App.vue';

describe('App', () => {
  it('Should component name be equal file name', () => {
    // WHEN
    const filename = 'App';
    // WHEN
    expect(App.name).toBe(filename);
  });

  it('Should import header component as dependency', () => {
    // THEN
    expect(App.components).toHaveProperty('Header');
  });
});
