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

export const Input = Template.bind({});
Input.args = {
    variant: 'medium',
    settings: { isRequired: true},
    label: 'Note',
    children: <input type="text" placeholder="Placeholder" className="border rounded p-4 w-full ml-3 mr-3"/>

}


export const RadioButton = Template.bind({});
RadioButton.args = {
    variant: 'large',
    settings: { isRequired: true },
    label: 'Note',
    children: (
        <div className="flex flex-col ml-3 mr-3">
            <label >
                <input type="radio" name="option" className="mr-2"/>
                A
            </label>
            <label >
                <input type="radio" name="option" className="mr-2"/>
                B
            </label>
            <label >
                <input type="radio" name="option" className="mr-2"/>
                B
            </label>
        </div>
    )
};