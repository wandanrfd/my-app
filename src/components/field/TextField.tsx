import React from 'react';

export interface TextFieldProps {
    variant: 'small' | 'medium' | 'large';
    settings: {
        isRequired: boolean;
    };
    label: string;
    children?: React.ReactNode;
}

const TextField: React.FC<TextFieldProps> = ({ variant, settings, label, children }) => {
    const variantClasses = {
        small: 'text-sm',
        medium: 'text-base ',
        large: 'text-lg ',
    };

    return (
        <div className="p-2 border rounded-md shadow-sm bg-white">
            <div className="mb-7 flex flex-col">
                <label className="font-bold mb-1 mt-4 ml-3">
                    {label}
                    {settings.isRequired && <span className="text-red-500 ml-1">*</span>}
                </label>
                <div className={`flex items-center ${variantClasses[variant]}`}>
                    {children}
                </div>
            </div>
          
        </div>
    );
};

export default TextField;