import { Story, Meta } from '@storybook/react';
import Page404 from '.';

export default {
  title: 'TMDB Search/Pages/Page404',
  component: Page404,
} as Meta;

const Template: Story = (args) => <Page404 {...args} />;

export const Default = Template.bind({});
