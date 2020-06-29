import getGif from '../../helpers/getGifs';

describe('Prueba al Helper getGifs', () => {
  test('Debe de traer 10 elementos ', async () => {
    const gifs = await getGif('naruto');

    expect(gifs.length).toBe(10);
  });

  test('Retorna un array vacio ', async () => {
    const gifs = await getGif('');

    expect(gifs.length).toBe(0);
  });
});
