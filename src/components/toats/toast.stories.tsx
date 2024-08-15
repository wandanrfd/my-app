import { Toast, ToastProps } from './toast';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
    title: 'Atoms/Toast',
    component: Toast,
    parameters: {
 
        layout: 'centered',
      },
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'select', options: ['information', 'notification'] },
        variant: { control: 'select', options: ['success', 'danger', 'default'] },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
    }
} as Meta;

export const Default: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;

Default.args = {
    type: 'information',
    variant: 'default',
    size: 'medium'
};

export const Success: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;

Success.args = {
    type: 'information',
    variant: 'success',
    size: 'medium'
};

export const Danger: StoryObj<ToastProps> = (args: React.JSX.IntrinsicAttributes & ToastProps) => <Toast {...args} />;

Danger.args = {
    type: 'information',
    variant: 'danger',
    size: 'medium'
};

