import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DetailResponse, SearchResponse } from 'src/types';

import { API_KEY, API_BASE_URL, LANG } from 'src/constants';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    // 詳細情報取得用Query
    fetchMovieById: builder.query<DetailResponse, number>({
      query: (id) => `movie/${id}?api_key=${API_KEY}&language=${LANG}`,
    }),
    // Popular情報取得用Query
    fetchPopularMovies: builder.query<SearchResponse, void>({
      query: () => `trending/movie/day?api_key=${API_KEY}&language=${LANG}`,
    }),
  }),
});

export const { useFetchMovieByIdQuery, useFetchPopularMoviesQuery } = movieApi;
