const key = process.env.REACT_APP_TMDB_API_KEY;
export const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjJiMzZmOTUwNDU2MTc1ZjllMTNhNzZiYjJiOWY0MiIsInN1YiI6IjY1MTgwZDViYTE5OWE2MDEzOGI4YThmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9_OVR568RvlvbYQ7EW4lM8qscH1pU9xvYnnm3ofBzbw";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/now_playing/?api_key=${key}&language=en-US&page=1`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
