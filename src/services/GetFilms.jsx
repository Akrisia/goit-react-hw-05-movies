import { http } from "./Api";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7abb9f029aa2b599dfc2a90359817f58';

export const getPopularFilms = () => {
    return http.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export const searchFilms = (query) => {
    return http.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`);
};

export const getFilmById = (filmId) => {
    return http.get(`${BASE_URL}/movie/${filmId}?api_key=${API_KEY}`);
};

export const getFilmCast = (filmId) => {
    return http.get(`${BASE_URL}/movie/${filmId}/credits?api_key=${API_KEY}`);
}

export const getFilmReviews = (filmId) => {
    return http.get(`${BASE_URL}/movie/${filmId}/reviews?api_key=${API_KEY}`);
}
