import React from 'react';
import { shallow } from 'enzyme';
import CategoryAdd from '../../components/CategoryAdd/CategoryAdd';

describe('Pruebas al componente CategoryAdd', () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<CategoryAdd setCategories={setCategory} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategoryAdd setCategories={setCategory} />);
  });

  test('Renderizado correctamente del componente <CategoryAdd/>', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'test del input';
    input.simulate('change', { target: { value } });
  });

  test('No debe llamar SetCategories', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategory).not.toHaveBeenCalled();
  });

  test('Debe llamar setCategories y limpiar la caja de text', () => {
    const value = 'test del input';

    // Simular el inputCahnge
    wrapper.find('input').simulate('change', { target: { value } });

    // Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    // SetCategories haya sido llamada && haya sido llamada una vez
    expect(setCategory).toHaveBeenCalled();
    expect(setCategory).toHaveBeenCalledTimes(1);

    // Que se haya llamado con una funcion
    expect(setCategory).toHaveBeenCalledWith(expect.any(Function));

    // El valor del input debe ser 0
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
