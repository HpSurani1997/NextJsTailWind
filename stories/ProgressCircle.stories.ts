import type { Meta, StoryObj } from '@storybook/react';

import ProgressCircle from '../src/shared/ProgressCircle';

const meta = {
  title: 'Shared/ProgressCircle',
  component: ProgressCircle,
  parameters: {},
  tags: [],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 50,
    color: '#005FCC',
    pathColor: '#ECF3F9',
    text: "50%"
  },
};
