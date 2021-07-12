import { Story, Meta } from '@storybook/react';
import HomePage from '.';

export default {
  title: 'TMDB Search/Pages/HomePage',
  component: HomePage,
} as Meta;

const Template: Story = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
