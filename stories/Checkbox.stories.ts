import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../src/shared/checkbox';

const meta = {
  title: 'Shared/Checkbox',
  component: Checkbox,
  parameters: {},
  tags: [],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'I accept the Terms of Service'
  },
};
