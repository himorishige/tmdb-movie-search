import { Meta, Story } from '@storybook/react';
import LoadingSpinner from '.';

export default {
  title: 'TMDB Search/Atoms/LoadingSpinner',
  component: LoadingSpinner,
} as Meta;

export const Default: Story = (args) => <LoadingSpinner {...args} />;
