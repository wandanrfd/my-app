import { Card, CardProps } from "./card";
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
    title: 'Atoms/Card',
    component: Card,
    argTypes: {
    variant: { control: 'select'}
    }
} as Meta;

export const Default: StoryObj<CardProps> = (args: React.JSX.IntrinsicAttributes & CardProps) => <Card {...args} />;
Default.args = {
    variant: 'elevation',
    classes: 'w-64 h-64'
};

export const WithText: StoryObj<CardProps> = (args: React.JSX.IntrinsicAttributes & CardProps) => (
    <Card {...args}>
    <div>
        <span>Story that shows Card component with text</span>

    </div>
    </Card>
);

WithText.args = {
    ...Default.args,
    classes: 'w-64 h-64 text-xl bg-green-600'
};