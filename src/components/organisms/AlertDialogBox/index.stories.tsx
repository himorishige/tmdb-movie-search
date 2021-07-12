import { Story, Meta } from '@storybook/react';
import AlertDialogBox, { Props } from '.';

export default {
  title: 'TMDB Search/Organisms/AlertDialogBox',
  component: AlertDialogBox,
} as Meta;

const Template: Story<Props> = (args) => <AlertDialogBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'タイトル',
  isOpen: true,
};
