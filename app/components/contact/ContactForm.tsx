'use client'

import { useForm } from 'react-hook-form';

const formFields = [
    {
        label: "First Name",
        name: "name",
        type: "text",
        placeholder: "First name",
        required: true,
    },
    {
        label: "Email Address",
        name: "email",
        type: "email",
        placeholder: "you@company.com",
        required: true,
    },
    {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        placeholder: "+1 (555) 000-0000",
        required: true,
    },
    {
        label: "Subject",
        name: "subject",
        type: "text",
        placeholder: "Subject here",
        required: true,
    },
    {
        label: "Message",
        name: "message",
        type: "textarea",
        placeholder: "Leave us a message...",
        required: true,
    },
];
const AGContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data:any) => {
        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert(`Failed to send message: ${responseData.error}`);
            }
        } catch (error) {
            alert('Failed to send message. Please try again later.');
        }
    };
    return (
        <div className="bg-white p-6 sm:p-12">
            <h2 className="text-2xl font-bold text-center mb-4">Send Us A Message</h2>
            <p className="text-center mb-8">If you have any questions, send us a message. We aim to reply within 24 hours.</p>
            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
                {formFields.map((field) => (
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
                        {/* Show errors for each field if any */}
                        {errors[field.name] && <span className="text-red-500">{field.label} is required.</span>}
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default AGContactForm;