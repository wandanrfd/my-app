import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';

export default {
    title: 'Atoms/TextField',
    component: TextField,
    parameters: {
        layout:'centered'
    },
    tags: ['autodocs']

} as Meta<TextFieldProps>;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Required = Template.bind({});
Required.args = {
    variant: 'small',
    settings: { isRequired: true },
    label: 'Note',
    children: <textarea placeholder="Placeholder" className="border rounded p-4 w-full h-20 ml-3 mr-3"/>
};

export const Optional = Template.bind({});
Optional.args = {
    variant: 'medium',
    settings: { isRequired: false },
    label: 'Note',
    children: <textarea placeholder="Placeholder" className="border rounded p-4 w-full h-20 ml-3 mr-3"/>
};
