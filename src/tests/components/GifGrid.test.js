import React from 'react';
import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe(' Testing al componente GifGrid', () => {
  test('Que se renderice correctamente el componente <GifGrid/>', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category="Bleach" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar items cuando se carga images useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'https://localhost/test.jpg',
        title: 'test',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category="Bleach" />);

    expect(wrapper).toMatchSnapshot();
  });
});
