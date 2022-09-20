export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=4EGTMjoru6a0XyYWlR50JKsPSl2g96ql&q=${categoria}&limit=20`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium,
  }));

  console.log(gifs);
  return gifs;
};
