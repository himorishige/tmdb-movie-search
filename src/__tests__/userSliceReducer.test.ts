import reducer, { toggleFavoritesList, UserState } from 'src/features/user/userSlice';

describe('userSlice/toggleFavoritesList', () => {
  const mockData = {
    adult: false,
    backdrop_path: '/nVKRspU9SQEs2gNrms8cDKsI4vx.jpg',
    genre_ids: [28, 878, 12, 10752],
    id: 588228,
    original_language: 'en',
    original_title: 'The Tomorrow War',
    overview: '',
    poster_path: '/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg',
    release_date: '2021-06-30',
    title: 'トゥモロー･ウォー',
    video: false,
    vote_average: 8.7,
    vote_count: 695,
    popularity: 771.266,
  };

  const mockData2 = {
    adult: false,
    backdrop_path: '/nVKRspU9SQEs2gNrms8cDKsI4vx.jpg',
    genre_ids: [28, 878, 12, 10752],
    id: 688228,
    original_language: 'en',
    original_title: 'The Tomorrow War',
    overview: '',
    poster_path: '/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg',
    release_date: '2021-06-30',
    title: 'トゥモロー･ウォー',
    video: false,
    vote_average: 8.7,
    vote_count: 695,
    popularity: 771.266,
  };

  test('initialStateにデータがない場合mockDataが正しく反映される', () => {
    let initialState: UserState = {
      searchResults: null,
      favoritesList: [],
      isLoading: false,
    };
    const action = { type: toggleFavoritesList.type, payload: mockData };
    const state = reducer(initialState, action);
    expect(state.isLoading).toEqual(false);
    expect(state.searchResults).toBeNull();
    expect(state.favoritesList).toStrictEqual([mockData]);
  });

  test('initialDataと同じidのデータが送られた場合同じ項目が削除される', () => {
    let initialState: UserState = {
      searchResults: null,
      favoritesList: [mockData],
      isLoading: false,
    };
    const action = { type: toggleFavoritesList.type, payload: mockData };
    const state = reducer(initialState, action);
    expect(state.isLoading).toEqual(false);
    expect(state.searchResults).toBeNull();
    expect(state.favoritesList).toEqual([]);
  });

  test('initialDataと異なるidのデータが送られた場合同じ項目が追加される', () => {
    let initialState: UserState = {
      searchResults: null,
      favoritesList: [mockData],
      isLoading: false,
    };
    const action = { type: toggleFavoritesList.type, payload: mockData2 };
    const state = reducer(initialState, action);
    expect(state.isLoading).toEqual(false);
    expect(state.searchResults).toBeNull();
    expect(state.favoritesList).toEqual([mockData, mockData2]);
  });
});
