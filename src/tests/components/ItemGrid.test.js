import React from 'react';
import ItemGrid from '../../components/ItemGrid/ItemGrid';
import { shallow } from 'enzyme';

describe('Pruebas al Componente ItemGrid ', () => {
  const title = 'Naruto';
  const url = 'https://gify.com';
  const wrapper = shallow(<ItemGrid title={title} url={url} />);

  test('Renderizado correctamente del componente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un parrafo con el Title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
    // console.log(p.text());
  });

  test('Debe tener una imagen y alt igual al de los props ', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener en ClassName= animate__rubberBand', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__rubberBand')).toBe(true);
  });
});
