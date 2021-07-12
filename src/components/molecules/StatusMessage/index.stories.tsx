import { Story, Meta } from '@storybook/react';
import StatusMessage, { Props } from '.';

export default {
  title: 'TMDB Search/Molecules/StatusMessage',
  component: StatusMessage,
} as Meta;

const Template: Story<Props> = (args) => <StatusMessage {...args} />;

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  children: 'メッセージ表示エリア',
};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  children: 'メッセージ表示エリア',
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
  children: 'メッセージ表示エリア',
};

export const Info = Template.bind({});
Info.args = {
  status: 'info',
  children: 'メッセージ表示エリア',
};
