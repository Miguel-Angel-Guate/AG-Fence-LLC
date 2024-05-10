"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import moment from 'moment';
const WritteReview = ({ writeReviewTitle }: any) => {

    const [isOpen, setIsOpen] = useState(false);

    const [hoverRating, setHoverRating] = useState(0);
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const [isThankYouOpen, setIsThankYouOpen] = useState(false);

    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm();
    const [userName, setUserName] = useState('');
    const rating = watch("rating");


    const handleRating = (rate: any) => {
        setValue("rating", rate);
    };


    const submitReview = async (data: any) => {
        setUserName(data.name.charAt(0).toUpperCase() + data.name.slice(1))
        const formattedData = {
            ...data,
            date: moment(data.date).format('YYYY-MM-DD') // assuming 'data.date' comes from a date picker or similar input
        };
        console.log("🚀 ~ submitReview ~ formattedData:", formattedData)


        try {
            const response = await fetch('/api/reviewservice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData)
            });
            const reviews = await response.json();
            console.log('Reviews after submission:', reviews);

            if (response.ok) {
                reset()
                setIsReviewOpen(false); // Close review dialog
                setIsThankYouOpen(true); // Open thank you dialog
                
            } else {
                throw new Error('Submission failed');
            }
            // Handle state update or actions after submission
        } catch (error) {
            console.error('Failed to submit review:', error);
        }
    }



    return (
        <>


            <button onClick={() => setIsReviewOpen(true)}>Leave us a Review</button>
            <Dialog open={isReviewOpen} onClose={() => setIsReviewOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
                <div className="flex items-center justify-center min-h-screen px-4">
                    <Dialog.Panel className="w-full max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-lg z-20">
                        <Dialog.Title className="text-lg font-bold">{writeReviewTitle}</Dialog.Title>

                        <form onSubmit={handleSubmit(submitReview)} className="mt-4 flex flex-wrap w-full flex-col justify-between">
                            
                            <input
                                className="input border-solid border-2 border-primary min-w-44 w-full"
                                {...register("name", { required: true })}
                                placeholder=" Your name"
                                onChange={(e) => {
                                    const { value } = e.target;
                                    setValue("name", value.charAt(0).toUpperCase() + value.slice(1));
                                }}
                            />
                            {errors.name && <p className="text-red-500">Name is needed</p>}
                            
                            <input
                                className="input mt-3 border-solid border-2 border-primary w-full"
                                {...register("location", { required: true })}
                                placeholder=" Your location"
                                onChange={(e) => {
                                    const { value } = e.target;
                                    setValue("location", value.charAt(0).toUpperCase() + value.slice(1));
                                }}
                            />
                            {errors.location && <p className="text-red-500">is needed</p>}
                            <textarea
                                className="textarea mt-4 border-solid border-2 border-primary w-full"
                                {...register("comment", { required: true })}
                                placeholder=" Review"
                                onChange={(e) => {
                                    const { value } = e.target;
                                    setValue("comment", value.charAt(0).toUpperCase() + value.slice(1));
                                }}
                                
                            />
                            {errors.comment && <p className="text-red-500">is needed</p>}
                            <div className="flex my-4">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <FaStar
                                        key={index}
                                        className={`h-8 w-8 cursor-pointer ${index < (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                        onMouseEnter={() => setHoverRating(index + 1)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => handleRating(index + 1)}
                                    />
                                ))}
                                {errors.rating && <p className="text-red-500">A rating is required.</p>}
                            </div>
                            <button type="submit" className="btn bg-primary h-10 w-full mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submit Review
                            </button>
                        </form>
                    </Dialog.Panel>
                </div>
            </Dialog>

            <Dialog open={isThankYouOpen} onClose={() => setIsThankYouOpen(false)} className="fixed inset-0 z-50 overflow-y-auto">
                <div className="fixed inset-0 bg-black bg-opacity-20" aria-hidden="true"></div> {/* Increase opacity for darker background */}
                <div className="flex items-center justify-center min-h-screen">
                    <Dialog.Panel className="w-full max-w-md p-6 bg-white z-50 rounded-lg shadow-lg">
                        <Dialog.Title className="text-lg font-bold">Thank you!</Dialog.Title>
                        <p>Thank you <span className='text-primary'>{userName}</span> for leaving us your review. It is important for us to improve.</p>
                        <button onClick={() => setIsThankYouOpen(false)} className="btn bg-primary w-20 text-white mt-4">Close</button>
                    </Dialog.Panel>
                </div>
            </Dialog>


        </>
    );
}

export default WritteReview;