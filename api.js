//Get movies and series
const getTrendingAll = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=d37aa81d99fd5b49201922d61ad5b2fd


&page=${1}`
  );
  const res = await data.json();
  return res.results;
};

//Movies
const getTopRatedMovies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=d37aa81d99fd5b49201922d61ad5b2fd


&language=en-US&page=1`
  );
  const res = await data.json();
  return res.results;
};

const getPopularMovies = async () => {
  const data =
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d37aa81d99fd5b49201922d61ad5b2fd


&language=en-US&page=1`);
  const res = await data.json();
  return res.results;
};

//Series
const getTopRatedSeries = async () => {
  const data =
    await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=d37aa81d99fd5b49201922d61ad5b2fd


&language=en-US&page=1`);
  const res = await data.json();
  return res.results;
};

const getPopularSeries = async () => {
  const data =
    await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=d37aa81d99fd5b49201922d61ad5b2fd


&language=en-US&page=1`);
  const res = await data.json();
  return res.results;
};

export {
  getTrendingAll,
  getTopRatedMovies,
  getPopularMovies,
  getTopRatedSeries,
  getPopularSeries,
};
