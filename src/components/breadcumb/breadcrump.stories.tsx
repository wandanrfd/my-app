import React, { Component } from 'react';
import { StoryFn } from '@storybook/react';
import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb, { BreadcrumbProps } from './breadcrum';
import { title } from 'process';

export default {
    title: 'Atoms/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta;


const Template: StoryFn<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args ={
    variant: 'small',
    datas: [{label: 'Home'}, {label: 'Library'}, {label: 'Data'}],
    separator:'>',
}

export const Custom = Template.bind({});
Custom.args = {
    variant: 'medium',
    datas: [{label: 'Home'}, {label: 'Library'}, {label: 'Data'}],
    separator: '/',
}

