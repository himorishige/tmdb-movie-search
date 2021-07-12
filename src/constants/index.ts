export const SITE_NAME = 'TMDb Search';
export const LANG = 'ja-JP';
export const IMAGE_BASE_URL = process.env.REACT_APP_API_IMAGE_BASE_URL!;
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL!;
export const API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY!;
export const API_SEARCH_URL = `search/movie?language=${LANG}&api_key=${API_KEY}&query=`;
