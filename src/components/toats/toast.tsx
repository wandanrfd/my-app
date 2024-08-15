import React, { FC, HTMLAttributes } from 'react';
import styles from './toast.module.css';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    type: 'information' | 'notification';
    variant: 'success' | 'danger' | 'default';
    size: 'small' | 'medium' | 'large';
    classes?: string;
}

export const Toast: FC<ToastProps> = ({ type, variant, size, children,classes, ...rest }) => {
    const getVariantClass = () => {
        switch (variant) {
            case 'success':
                return styles.success;
            case 'danger':
                return styles.danger;
            case 'default':
                return styles.default;
            default:
                return styles.default;
        }
    };

    const getSizeClass = () => {
        return styles[size];
    };

    return (
        <div
            className={`${styles.toast} ${getVariantClass()} ${getSizeClass()}`}
            {...rest}
        >
            {variant === 'success' && (
                
                <div className={[
                    classes,
                    'rounded-lg border-2 border-green-600 bg-green-100 w-80 h-30 text-green-600',
                    `${variant === 'success'}`
                ].join(' ')}
                {...rest}>
                    {children}
                    <span className="font-bold md-5 ml-3">Success Message</span>
                    <p className="ml-3">This is success message for information type</p>

                </div>
            )}
            {variant === 'danger' && (
                  <div className={[
                    classes,
                    'rounded-lg border-2 border-red-400 bg-red-100 w-80 h-30 text-red-600',
                    `${variant === 'danger'}`
                ].join(' ')}
                {...rest}>
                    {children}
                    <span className="font-bold md-5 ml-3">Failed Message</span>
                    <p className="ml-3">This is failed message for information type</p>

                </div>
            )}
            {variant === 'default' && (
                <div className={[
                    classes,
                    'rounded-lg border-2 border-black-500 bg-white w-80 h-30',
                    `${variant === 'default'}`
                ].join(' ')}
                {...rest}>
                    {children}
                    <span className="font-bold md-5 ml-3">Notification</span>
                    <p className="ml-3">Hello World! This is taost notification</p>

                </div> 
            )}
        </div>
    );
};
