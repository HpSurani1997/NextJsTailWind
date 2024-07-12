import type { Meta, StoryObj } from '@storybook/react';

import '../src/app/globals.css';
import AuthLayout from '@/shared/AuthLayout';

const meta = {
  title: 'Shared/AuthLayout',
  component: AuthLayout,
  parameters: {},
  tags: [],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ''
  },
};
