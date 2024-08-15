import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './modal';


import { Modal } from './modal';

const meta = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
 
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  
  args: { onClick: fn() },
} satisfies Meta<typeof Modal>;



export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      label: 'Open Modal',
    },
};


export const Import: Story = {
  args: {
    label: 'Open Modal',
  },
};


