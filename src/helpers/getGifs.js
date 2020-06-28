const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=9yYinLKzHxLHb3dW9bp84743eJHjb5sc`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images?.downsized_medium.url,
    };
  });
  return gifs;
  // console.log(gifs);
};

export default getGif;
