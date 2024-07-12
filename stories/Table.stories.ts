import type { Meta, StoryObj } from '@storybook/react';
import Table from '../src/shared/Table';
import '../src/app/globals.css';

const meta = {
  title: 'Shared/Table',
  component: Table,
  parameters: {},
  tags: [],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    header: [
      { label: 'Date' },
      { label: 'Score' },
    ],
    data: [
        { value1: 'April 20, 2022', value2: '78' },
        { value1: 'April 22, 2022', value2: '88' },
        { value1: 'May 14, 2022', value2: '90' },
        { value1: 'May 17, 2022', value2: '67' },
    ],
    classNames: {
      containerStyle: 'w-[375px] h-[324px]',
      headerStyle: 'flex flex-row justify-around items-center h-[60px] bg-custom-gradient shadow-custom-shadow rounded-t-lg',
      rowStyle: 'flex flex-row justify-around items-center h-[60px]',
      cellStyle: 'flex-1 text-center',
    },
  },
};
