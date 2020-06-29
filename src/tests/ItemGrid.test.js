import React from 'react';
import ItemGrid from '../components/ItemGrid/ItemGrid';
import { shallow } from 'enzyme';

describe('Pruebas al Componente ItemGrid ', () => {
  test('Renderizado correctamente del componente ', () => {
    const title = 'Naruto';
    const url = 'https://gify.com';
    const wrapper = shallow(<ItemGrid title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
