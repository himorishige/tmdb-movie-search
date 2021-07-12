import { Story, Meta } from '@storybook/react';
import SearchArea from '.';

export default {
  title: 'TMDB Search/Organisms/SearchArea',
  component: SearchArea,
} as Meta;

const Template: Story = (args) => <SearchArea {...args} />;

export const Default = Template.bind({});
