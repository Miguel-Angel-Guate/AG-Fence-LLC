"use client"

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPerson } from "react-icons/fa6";

const ReviewsData = ({reviews, legends}:any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => {
            // Ensure the index does not exceed the bounds when showing a single review.
            if (visibleCount === 1 && prevIndex < reviews.length - 1) {
                return prevIndex + 1;
            }
            return prevIndex;
        });
    };

    const previousReview = () => {
        setCurrentIndex((prevIndex) => {
            // Ensure the index does not go below 0 when showing a single review.
            if (visibleCount === 1 && prevIndex > 0) {
                return prevIndex - 1;
            }
            return prevIndex;
        });
    };

    const handleShowMore = () => {
        if (visibleCount + 5 <= reviews.length) {
            setVisibleCount(visibleCount + 5); // Increment by 5 each click, up to the total length.
        } else if (visibleCount < reviews.length) {
            setVisibleCount(reviews.length); // Show all if adding 5 exceeds the total length.
        } else {
            setVisibleCount(1); // If already showing all, reset to showing just one review.
            setCurrentIndex(0); // Reset to the first review.
        }
    };

    // Adjusted to handle both single and multiple reviews visibility.
    const displayedReviews = visibleCount === 1 ? [reviews[currentIndex]] : reviews.slice(0, visibleCount);

    return (
        <div className="bg-white text-black p-10  mt-3 relative flex flex-col items-center">
            <div className="absolute top-0 right-0 p-4">
                <span className="text-sm bg-primary py-1 px-3 rounded-full">
                    {visibleCount === 1 ? `Review ${currentIndex + 1} of ${reviews.length}` : `Showing ${visibleCount} of ${reviews.length}`}
                </span>
            </div>
            <h2 className="text-base sm:text-4xl font-bold mb-6">{legends.title}</h2>

            <div className={`w-full ${visibleCount > 1 ? 'flex flex-wrap gap-4 justify-center items-stretch' : 'flex flex-col items-center'}`}>
                {displayedReviews.map((review:any, index:any)  => (
                    <div key={index} className="bg-primary p-6 rounded-lg shadow-lg text-center mb-4 w-full sm:w-1/5">
                        <div className="inline-block p-2 bg-orange-300 rounded-full mb-4">
                            <FaPerson size={32} />
                        </div>
                        <p className="mb-4">{review.comment}</p>
                        <p className="font-bold text-sm">{review.name}, {review.location}</p>
                        <p className="text-sm">{review.date}</p>
                    </div>
                ))}
            </div>

            {visibleCount === 1 && (
                <div className="flex justify-between w-full max-w-2xl mx-auto">
                    <button
                        onClick={previousReview}
                        disabled={currentIndex === 0}
                        className={`${currentIndex === 0 ? 'text-gray-500' : 'text-primary'}`}
                    >
                        <FaChevronLeft size={32} />
                    </button>

                    <button
                        onClick={nextReview}
                        disabled={currentIndex >= reviews.length - 1}
                        className={`${currentIndex >= reviews.length - 1 ? 'text-gray-500' : 'text-primary'}`}
                    >
                        <FaChevronRight size={32} />
                    </button>
                </div>
            )}

            <button
                className="mt-4 px-6 py-2 border border-orange-500 bg-primary text-white rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                onClick={handleShowMore}
            >
                {visibleCount < reviews.length ? 'SHOW MORE' : 'SHOW LESS'}
            </button>
        </div>
    )
}

export default ReviewsData;