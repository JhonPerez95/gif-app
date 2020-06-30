import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import GifExperts from '../../components/GifExpert/GifExperts';

describe('Testing al componente GifExperts: ', () => {
  test('Renderizado correctamente del componente <GifExpert/> ', () => {
    const wrapper = shallow(<GifExperts />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar GifGrid  que estan por defecto', () => {
    const category = ['Naruto', 'Bleach', 'Black Clover'];
    const wrapper = shallow(<GifExperts defaultCategory={category} />);

    expect(wrapper.find('GifGrid').length).toBe(category.length);
    expect(wrapper).toMatchSnapshot();
  });
});
