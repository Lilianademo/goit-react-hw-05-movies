import axios from "axios";

const apiKey = "7e448c0839dd282d30807f932a6c14f8";

export const getTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`
  );

  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}`
  );

  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&api_key=${apiKey}`
  );

  return response.data.results;
};

export const getCast = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );

  return response.data.cast;
};

export const getReviews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
  );

  return response.data.results;
};
