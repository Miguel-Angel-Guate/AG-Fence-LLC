"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import moment from 'moment';
const WritteReview = ({ writeReviewTitle }: any) => {

    const [isOpen, setIsOpen] = useState(false);

    const [hoverRating, setHoverRating] = useState(0);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const rating = watch("rating");


    const handleRating = (rate: any) => {
        setValue("rating", rate);
    };


    const submitReview = async (data: any) => {
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
            // Handle state update or actions after submission
        } catch (error) {
            console.error('Failed to submit review:', error);
        }
    }



    return (
        <>
            <button onClick={() => setIsOpen(true)}>Leave us a Review</button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
                <div className="flex items-center justify-center min-h-screen px-4">
                    <Dialog.Panel className="w-full max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-lg z-20">
                        <Dialog.Title className="text-lg font-bold">{writeReviewTitle}</Dialog.Title>
                        <form onSubmit={handleSubmit(submitReview)} className="mt-4 flex flex-wrap w-full flex-col justify-between">
                            <input
                                className="input border-solid border-2 border-primary min-w-44 w-full"
                                {...register("name", { required: true })}
                                placeholder="Your name"
                            />
                            {errors.name && <p className="text-red-500">Name is needed</p>}
                            <input
                                className="input mt-3 border-solid border-2 border-primary w-full"
                                {...register("location", { required: true })}
                                placeholder="Your location"
                            />
                            {errors.location && <p className="text-red-500">is needed</p>}
                            <textarea
                                className="textarea mt-4 border-solid border-2 border-primary w-full"
                                {...register("comment", { required: true })}
                                placeholder="Your comment"
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

        </>
    );
}

export default WritteReview;