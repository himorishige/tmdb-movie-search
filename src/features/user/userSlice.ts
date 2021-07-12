import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from 'src/app/store';
import { MovieData, SearchResponse, SearchParams, DetailResponse } from 'src/types';

import { API_BASE_URL, API_SEARCH_URL } from 'src/constants';

export type UserState = {
  searchResults: SearchResponse | null;
  favoritesList: Array<MovieData | DetailResponse>;
  isLoading: boolean;
  error?: string;
};

// LocalStorageにお気に入りリストがある場合は復元
let favoritesListFromStorage = [];
const _favoritesListFromStorage = window.localStorage.getItem('favoritesList');
if (_favoritesListFromStorage) {
  favoritesListFromStorage = JSON.parse(_favoritesListFromStorage);
}

const initialState: UserState = {
  searchResults: null,
  favoritesList: favoritesListFromStorage,
  isLoading: false,
};

// 検索結果を取得する
export const fetchSearchResults = createAsyncThunk(
  'user/fetchSearchResults',
  async (params: SearchParams, { rejectWithValue }) => {
    const response = await axios
      .get<SearchResponse>(`${API_BASE_URL}${API_SEARCH_URL}${params.keyword}&page=${params.page}`)
      .catch((err) => {
        rejectWithValue(err);
        throw err;
      });
    return response.data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleFavoritesList: (state, action: PayloadAction<MovieData | DetailResponse>) => {
      if (state.favoritesList.find((item) => item.id === action.payload.id)) {
        state.favoritesList = state.favoritesList.filter((item) => item.id !== action.payload.id);
      } else {
        state.favoritesList = [...state.favoritesList, action.payload];
      }
      // お気に入りリストをLocalStorageに保存
      window.localStorage.setItem('favoritesList', JSON.stringify(state.favoritesList));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state) => {
        state.isLoading = false;
        state.error = '検索結果の取得に失敗しました。';
      });
  },
});

export const { toggleFavoritesList } = userSlice.actions;

// 検索結果
export const selectSearchResults = (state: RootState) => state.user.searchResults;
// isLoadingの真偽値
export const selectLoading = (state: RootState) => state.user.isLoading;
// error:stringの値
export const selectError = (state: RootState) => state.user.error;
// お気に入りリスト一覧
export const selectFavoritesList = (state: RootState) => state.user.favoritesList;
// お気に入りリストのMovieID
export const selectFavoritesIds = (state: RootState) =>
  state.user.favoritesList.map((movie) => movie.id);

export default userSlice.reducer;
