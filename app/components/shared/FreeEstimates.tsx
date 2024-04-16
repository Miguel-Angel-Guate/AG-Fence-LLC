import {  FaPhone } from "react-icons/fa6";

const RequestFreeEstimate = ({freeEstimate}:any) => { 
    return (
        <div className="flex flex-col items-center justify-center">
            {freeEstimate?.length > 0 && freeEstimate.map((option:any) => (
                <div key={option.id} className={`bg-green-600 text-white text-center p-4 rounded-md hover:bg-green-600 cursor-pointer w-auto mb-4`}>
                    <a href={option.href} className="flex justify-center items-center space-x-2 hover:underline">
                    <FaPhone className="text-white" />
                        <span>{option.text}</span>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default RequestFreeEstimate;