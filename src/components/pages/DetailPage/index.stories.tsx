import { Story, Meta } from '@storybook/react';
import DetailPage, { Props } from '.';

export default {
  title: 'TMDB Search/Pages/DetailPage',
  component: DetailPage,
} as Meta;

const Template: Story<Props> = (args) => <DetailPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  //@ts-ignore
  match: {
    params: {
      id: '508943',
    },
  },
};
