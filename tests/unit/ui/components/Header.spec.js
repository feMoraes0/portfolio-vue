import Header from '@/ui/components/Header.vue';

describe('Header', () => {
  it('Should component name be equal file name', () => {
    // WHEN
    const filename = 'Header';
    // THEN
    expect(Header.name).toBe(filename);
  });

  it('Should has svg icons imported as components', () => {
    // THEN
    expect(Header.components).toHaveProperty('Email');
    expect(Header.components).toHaveProperty('Github');
    expect(Header.components).toHaveProperty('Linkedin');
    expect(Header.components).toHaveProperty('Logo');
  });
});
