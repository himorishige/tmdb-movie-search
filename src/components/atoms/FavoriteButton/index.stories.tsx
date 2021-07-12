import { Meta, Story } from '@storybook/react';
import FavoriteButton, { Props } from '.';

export default {
  title: 'TMDB Search/Atoms/FavoriteButton',
  component: FavoriteButton,
} as Meta;

const Template: Story<Props> = (args) => <FavoriteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  favoriteFlag: true,
  size: '2rem',
  toggleHandler: () => {},
};
Default.decorators = [
  (StoryFn) => <div style={{ padding: '2rem', backgroundColor: '#2A4365' }}>{StoryFn()}</div>,
];
