import { Story, Meta } from '@storybook/react';
import Layout, { Props } from '.';

export default {
  title: 'TMDB Search/Pages/Layout',
  component: Layout,
} as Meta;

const Template: Story<Props> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'layout',
};
