import React, { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './breadcrum.module.css';
import { FaHome } from 'react-icons/fa';


export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
    variant: 'small' | 'medium' | 'large';
    datas: { label: string }[];
    separator?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ variant, datas, separator = '/', ...rest }) => {
    return (
        <nav className={`${styles.breadcrumb} ${styles[variant]}`} {...rest}>
            {datas.map((item, index) => (
                <React.Fragment key={index}>
                    <div className={styles.breadcrumbItem}>
                    {item.label === 'Home' && <FaHome className='mr-2 icon-blue-600 text-blue-600'/>}

                    <a href="#" className="font-bold text-blue-600 mr-2"> 
                        {item.label}
                    </a>

                    </div>
                   
                    {index < datas.length - 1 && (
                        <span className="font bold text-gray-600 mr-2">{separator}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;


