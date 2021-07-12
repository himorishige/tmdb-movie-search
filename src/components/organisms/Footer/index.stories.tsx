import { Story, Meta } from '@storybook/react';
import Footer from '.';

export default {
  title: 'TMDB Search/Organisms/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});
