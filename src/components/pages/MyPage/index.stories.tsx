import { Story, Meta } from '@storybook/react';
import MyPage from '.';

export default {
  title: 'TMDB Search/Pages/MyPage',
  component: MyPage,
} as Meta;

const Template: Story = (args) => <MyPage {...args} />;

export const Default = Template.bind({});
