import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MyForm from './Form';

export default {
    title: 'Atoms/Form',
    component: MyForm,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} as Meta;




const Template: StoryFn<{ variant: 'small' | 'medium' | 'large' }> = (args) => <MyForm {...args} />;

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'large',
};
