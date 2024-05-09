"use client"

import { formatDate } from "@/app/libs/formatDateReviews";
import moment from "moment";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import WritteReview from "./WritteReview";


const ReviewsData = ({ reviews, legends }: any) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => {
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
        <>
        <div>
            <button onClick={() => setIsModalOpen(true)}>Leave us a Review</button>
            <WritteReview
                writeReviewTitle="Leave us a Review"
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
            />
        </div>
            {/* <WritteReview writteReviewTitle="Leave us a Review" /> */}

            <div className="  text-black p-4  2xl:min-h-[60vh] flex justify-center flex-wrap items-center">
                <div className="w-full flex justify-end mb-2">
                    <span className="text-sm bg-primary py-1 px-3 rounded-full">
                        {visibleCount === 1 ? `Review ${currentIndex + 1} of ${reviews.length}` : `Showing ${visibleCount} of ${reviews.length}`}
                    </span>
                </div>
                <h2 className="text-base flex justify-center w-full sm:text-4xl font-bold mb-6">{legends.title}</h2>

                <div className="w-auto justify-center items-center flex">
                    <div className="flex w-full">
                        {visibleCount === 1 && (
                            <button onClick={previousReview} disabled={currentIndex === 0} className={`${currentIndex === 0 ? 'text-gray-500 mr-4' : 'text-primary mr-4'}`}>
                                <FaChevronLeft size={32} />
                            </button>
                        )}
                        <div className={`w-full flex items-center ${visibleCount > 1 ? 'flex flex-wrap gap-4 justify-center items-stretch' : 'flex flex-col items-center'}`}>
                            {displayedReviews.map((review: any) => (
                                <div key={review.name} className="bg-slate-50 border-2 border-green-100 flex flex-wrap items-center justify-center p-6 sm:max-h-80 rounded-lg shadow-lg text-center w-full sm:max-w-sm">
                                    <div className="flex w-auto justify-around items-center max-h-9">
                                        <div className=" bg-orange-300 rounded-full w-8 mr-2 flex items-center justify-center text-white font-bold text-lg">
                                            {review.name[0]}
                                        </div>
                                        <p className="font-bold text-[10px] sm:text-sm">{review.name} from {review.location}</p>
                                    </div>

                                    <div className="flex mb-3 mt-3 w-auto items-center justify-between">
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <span key={index} className={`fa fa-star ${review.rating >= index + 1 ? 'text-orange-400' : review.rating > index && review.rating < index + 1 ? 'text-orange-400/50' : 'text-gray-400'}`}>
                                                {index < review.rating - 0.5 ? '★' : '☆'}
                                            </span>
                                        ))}
                                        <p className="text-[11px] sm:text-sm ml-2">{formatDate(review.date)}</p>
                                    </div>

                                    <p className="mb-4">{review.comment}</p>


                                </div>
                            ))}
                        </div>
                        {visibleCount === 1 && (
                            <button onClick={nextReview} disabled={currentIndex >= reviews.length - 1} className={`${currentIndex >= reviews.length - 1 ? 'text-gray-500 ml-4' : 'text-primary ml-4'}`}>
                                <FaChevronRight size={32} />
                            </button>
                        )}
                    </div>
                </div>


                <div className="flex w-full justify-center">
                    <button className="mt-4 w-auto px-6 py-2 border border-orange-500 bg-primary text-white rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                        onClick={handleShowMore}>
                        {visibleCount < reviews.length ? 'SHOW MORE' : 'SHOW LESS'}
                    </button>
                </div>

            </div>

        </>
    )
}


export default ReviewsData;

