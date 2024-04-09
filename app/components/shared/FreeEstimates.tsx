import {  FaPhone } from "react-icons/fa6";

const contactOptions = [
    {
        id: 'free-estimate',
        icon: <FaPhone className="text-white" />,
        text: 'Free Estimate - Call Us: (443) 628-9734',
        href: 'tel:+14436289734',
        bgClass: 'bg-primary', // Customize this as needed
        hoverBgClass: 'bg-green-600', // Customize this as needed
    },
    // Add more contact options as needed here
];
const RequestFreeEstimate = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            {contactOptions.map((option) => (
                <div key={option.id} className={`${option.bgClass} text-white text-center p-4 rounded-md hover:${option.hoverBgClass} cursor-pointer w-auto mb-4`}>
                    <a href={option.href} className="flex justify-center items-center space-x-2 hover:underline">
                        {option.icon}
                        <span>{option.text}</span>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default RequestFreeEstimate;