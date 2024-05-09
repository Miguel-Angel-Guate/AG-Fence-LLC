"use client"
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaStar } from 'react-icons/fa';

const WritteReview = ({ writeReviewTitle, isOpen, setIsOpen }: any) => {

    const [rating, setRating] = useState(0);
    console.log("🚀 ~ WritteReview ~ rating:", rating)
    const [hoverRating, setHoverRating] = useState(undefined);
    const [review, setReview] = useState({
        name: '',
        location: '',
        comment: '',
        date: new Date().toISOString().slice(0, 10),  // Current date in YYYY-MM-DD format
    });

    const handleRating = (rate: any) => {
        setRating(rate);
    };

    const handleMouseOver = (rate: any) => {
        setHoverRating(rate);
    };

    const handleMouseLeave = () => {
        setHoverRating(undefined);
    };

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const submitReview = () => {
        handleSubmitReview({ ...review, rating });
        setIsOpen(false);
    };

    const handleSubmitReview = (reviewData:any) => {
        console.log('Review Submitted:', reviewData);
        // Add logic here to send data to your database
    };
    console.log("🚀 ~ WritteReview ~ review:", review)
    return (
        <>
    
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
            <div className="flex items-center justify-center min-h-screen px-4">
                <Dialog.Panel className="w-full max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-lg z-20">
                    <Dialog.Title className="text-lg font-bold">{writeReviewTitle}</Dialog.Title>
                    <div className="mt-4 flex flex-wrap w-full  flex-col justify-between">
                        <input className="input border-solid border-2 border-primary min-w-44 w-44" name="name" placeholder="Your name" value={review.name} onChange={handleChange} />
                        <input className="input mt-3 border-solid border-2 border-primary" name="location" placeholder="Your location" value={review.location} onChange={handleChange} />
                        <textarea className="textarea mt-4 border-solid border-2 border-primary" name="comment" placeholder="Your comment" value={review.comment} onChange={handleChange} />
                        <div className="flex my-4">
                            {Array.from({ length: 5 }, (_, index) => (
                                <FaStar
                                    key={index}
                                    className={`h-8 w-8 cursor-pointer ${index < (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                    onMouseEnter={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleRating(index + 1)}
                                />
                            ))}
                        </div>
                        <button onClick={submitReview} className="btn bg-primary h-6 w-20 flex  mt-4 hover:bg-blue-700 text-white font-bold  px-4 rounded">
                            Submit Review
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>

        </>
    );
}

export default WritteReview;