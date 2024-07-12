import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import '../src/app/globals.css';
import Input from '../src/shared/Input';

const meta = {
  title: 'Shared/Input',
  component: Input,
  parameters: {},
  tags: [],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {
    placeholder: 'password',
    type: 'password',
    className: '',
    onChange: action('on-change'),
  },
};
