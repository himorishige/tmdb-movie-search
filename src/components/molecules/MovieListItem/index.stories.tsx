import { Story, Meta } from '@storybook/react';
import MovieListItem, { Props } from '.';

export default {
  title: 'TMDB Search/Molecules/MovieListItem',
  component: MovieListItem,
} as Meta;

const Template: Story<Props> = (args) => <MovieListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
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
  },
};
