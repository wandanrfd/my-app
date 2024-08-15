// import React, { useState } from 'react';
import React, { useState } from 'react';
import './modal.css';
import { Box, Input } from "@mui/material"

// import { Button } from '@/stories/Button';


export interface ButtonProps {
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    size = 'medium',
    backgroundColor,
    label,
    ...props
}) => {
    return (
        <button
            type="button"
            className={['rounded-lg bg-sky-500 text-white font-bold', `storybook-button--${size}`].join(' ')}
            {...props}
        >
            {label}
            <style jsx>{`
                button {
                    background-color: ${backgroundColor};
                }
            `}</style>
        </button>
    );
};

export const Modal: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSubmit = () => {
        alert(`Submitted value: ${inputValue}`);
        setModalOpen(false);
    };

    return (
        <>
            <Button
                label="Open Modal"
                onClick={handleOpenModal}
            />
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="bg-white p-5 rounded-lg border-2 border-gray-200 w-[400px] max-w-[1000%]">
                        <p className="font-bold text-center">Remark</p>
                        <h2 className="text-gray-400 font-bold ">Remark</h2>
                        <textarea
                            // type="textarea"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="bg-white p-5 rounded-lg border-2 border-gray-200 w-[100%] mb-5"
                        />
                        <div className="flex justify-center">
                        <button className="rounded-lg bg-white border-2 border-gray-200 w-[100px] h-[40px] text-gray-400 font-bold mr-5" onClick={handleCloseModal}>
                                Cancel
                            </button>
                            <button className="rounded-lg bg-sky-500 w-[100px] h-[40px] text-white font-bold  " onClick={handleSubmit}>
                                Submit
                            </button>
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


// export interface ButtonProps {
//     primary?: boolean;
//     backgroundColor?: string;
//     size?: 'small' | 'medium' | 'large';
//     label: string;
//     onClick?: () => void;
// }

// export const Button = ({
//     primary = false,
//     size = 'medium',
//     backgroundColor,
//     label,
//     ...props
// }: ButtonProps) => {
//     const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//     return (
//         <button
//             type="button"
//             className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//             {...props}
//         >
//             {label}
//             <style jsx>{`
//                 button {
//                     background-color: ${backgroundColor};
//                 }
//             `}</style>
//         </button>
//     );
// };

// export const Modal = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [inputValue, setInputValue] = useState('');

//     const handleOpenModal = () => {
//         setModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setModalOpen(false);
//     };

//     const handleSubmit = () => {
//         alert(`Submitted value: ${inputValue}`);
//         setModalOpen(false);
//     };

//     return (
//         <>
//             <Button 
//             primary
//             label="Open Modal"
//             onClick={handleOpenModal}>
                   
//             </Button>
//             {isModalOpen && (
                
                
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                     <p className=" font-bold">Remark</p>
//                         <h2>Edit Text</h2>
//                         <input
//                             type="text"
//                             value={inputValue}
//                             onChange={(e) => setInputValue(e.target.value)}
//                             className="modal-input"
//                         />
//                         <div className="modal-buttons">
//                             <button className="modal-button" onClick={handleSubmit}>
//                                 Submit
//                             </button>
//                             <button className="modal-button cancel-button" onClick={handleCloseModal}>
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };



