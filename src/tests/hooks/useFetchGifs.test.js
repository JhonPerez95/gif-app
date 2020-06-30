import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe(' test al Hook useFetchGifs', () => {
  test('debe de retornar un state', async () => {
    // const {data, loading} = useFetchGifs('Naruto')
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Naruto')
    );
    const { data, loading } = result.current;

    await waitForNextUpdate(); // Esperar a que se ejecute el useEffect

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('Debe retornar un arreglo de imagenes y loading en False', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Naruto')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
