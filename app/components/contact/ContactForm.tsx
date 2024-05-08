'use client'
import { onSubmitAgForm } from '@/app/libs/send-email';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AGContactForm = ({ formFields, formLeyends }: any) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [message, setMessage] = useState({ content: '', type: '' });

    const handleSuccess = (msg:any) => {
        setMessage({ content: msg, type: 'success' });
        reset(); // Reset the form after successful submission
    };

    const handleError = (msg:any) => {
        setMessage({ content: msg, type: 'error' });
    };

    const handleFormSubmit = (data:any) => {
        onSubmitAgForm(data, handleSuccess, handleError);
    };

    return (
        <div className="bg-white p-6 sm:p-12">
            <h2 className="text-2xl text-primary font-bold text-center mb-4">{formLeyends?.title}</h2>
            <p className="text-center mb-8">{formLeyends?.subtitle}</p>
            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                {formFields.map((field: any) => (
                    <div key={field.name} className="flex flex-col">
                        <label htmlFor={field.name} className=" font-medium">{field.label}</label>
                        {field.type !== "textarea" ? (
                            <input
                                {...register(field.name, { required: field.required })}
                                type={field.type}
                                id={field.name}
                                placeholder={field.placeholder}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        ) : (
                            <textarea
                                {...register(field.name, { required: field.required })}
                                id={field.name}
                                placeholder={field.placeholder}
                                rows={4}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ringring-green-500"
                            />
                        )}
                        {errors[field.name] && <span className="text-red-500">{field.label} is required.</span>}
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    {formLeyends?.button}
                </button>
            </form>
            {message.content && (
                <div className={`mb-4 p-4 text-sm text-center rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message?.content}
                </div>
            )}
        </div>
    );
}

export default AGContactForm;