import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  code: yup.string().required('Code is required'),
  clusterName: yup.string().required('Cluster name is required'),
  description: yup.string().optional(),
});

type FormValues = {
  code: string;
  clusterName: string;
  description?: string;
};

type Variant = 'small' | 'medium' | 'large';

interface FormProps {
  variant?: Variant;
}

const sizeClasses = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
};

const Form: React.FC<FormProps> = ({ variant = 'medium' }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`p-4 max-w-md mx-auto ${sizeClasses[variant]}`}>
        <div className="flex justify-center">
            <div>
                <label htmlFor="code" className={`block font-bold text-gray-700 ${sizeClasses[variant]}`}>
                    Code
                    <span className="text-red-500 ml-1">*</span>
                </label>
                <Controller
                name="code"
                control={control}
                defaultValue=""
                render={({ field }) => ( 
                    <input
                    id="code"
                    type="text"
                    {...field}
                    className={`mt-1 w-[88%] h-[50%] border border-gray-300 rounded-sm shadow-sm mr-5 ${sizeClasses[variant]} ${errors.code ? 'border-red-500' : ''}`}
                />
            )}
            />
            {errors.code && <p className="text-red-500">{errors.code.message}</p>}
            </div>


            <div>
                <label htmlFor="clusterName" className={`block font-bold text-gray-700 ml-5 ${sizeClasses[variant]}`}>
                    Cluster Name
                    <span className="text-red-500 ml-1">*</span>
                </label>
                <Controller
                name="clusterName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <input
                    id="clusterName"
                    type="text"
                    {...field}
                    className={` mt-1 w-[88%] h-[50%] border border-gray-300 rounded-sm shadow-sm  ml-5 ${sizeClasses[variant]} ${errors.clusterName ? 'border-red-500' : ''}`}
                  />
                 )}
                />
                {errors.clusterName && <p className="text-red-500 ml-5">{errors.clusterName.message}</p>}
            </div>

            </div>
      
            <div>
                <label htmlFor="description" className={`mt-5 block font-bold text-gray-700 ${sizeClasses[variant]}`}>
                    Description
                </label>
                <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <textarea
                        id="description"
                        {...field}
                        rows={4}
                        className={`mt-1 w-full border border-gray-300 rounded-md shadow-sm  ${sizeClasses[variant]}`}
                    />
                 )}
             />
            </div>

            <div className='flex justify-end'>
                <button className={`mt-4 inline-flex items-center px-4 py-2 border border-indigo-600 rounded-md shadow-sm text-indigo-600 bg-white mr-3
                    ${sizeClasses[variant]}`}>
                    Cencel
                </button>
                <button
                type="submit"
                className={`mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 
                ${sizeClasses[variant]}`}
                >
                    Save
                </button>
      

            </div>

      
    </form>
  );
};

export default Form;
//sebelum dirubah