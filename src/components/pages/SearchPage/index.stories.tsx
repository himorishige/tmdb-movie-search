import { Story, Meta } from '@storybook/react';
import SearchPage from '.';

export default {
  title: 'TMDB Search/Pages/SearchPage',
  component: SearchPage,
} as Meta;

const Template: Story = (args) => <SearchPage {...args} />;

export const Default = Template.bind({});
