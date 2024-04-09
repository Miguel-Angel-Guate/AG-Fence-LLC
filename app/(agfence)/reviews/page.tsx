"use client"
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPerson } from "react-icons/fa6";



const reviews = [
    {
        name: "Jane Doe",
        location: "Los Angeles",
        profilePicture: <FaPerson />,        // Replace with actual image path
        comment: "The service was outstanding! Thank you for making our backyard a dream come true.",
        date: "2023-03-01"
    },
    {
        name: "John Smith",
        location: "New York",
        profilePicture: <FaPerson />,
        comment: "Professional team, excellent craftsmanship. Highly recommended.",
        date: "2023-03-05"
    },
    {
        name: "Alice Johnson",
        location: "Chicago",
        profilePicture: <FaPerson />,
        comment: "Our new deck is gorgeous! We can't wait to host our friends and family.",
        date: "2023-03-10"
    },
    {
        name: "Omar Hassan",
        location: "Miami",
        profilePicture: <FaPerson />,
        comment: "Great value for money. They finished the work ahead of schedule without compromising quality.",
        date: "2023-03-15"
    },
    {
        name: "Samantha Green",
        location: "Seattle",
        profilePicture: <FaPerson />,
        comment: "Very pleased with the fence installation. It looks sturdy and elegant!",
        date: "2023-03-20"
    },
    {
        name: "Luis Ortega",
        location: "Houston",
        profilePicture: <FaPerson />,
        comment: "The attention to detail is phenomenal. The team was courteous and respectful.",
        date: "2023-03-25"
    },
    {
        name: "Emily White",
        location: "San Francisco",
        profilePicture: <FaPerson />,
        comment: "They transformed our front yard beautifully. Exceptional design and service!",
        date: "2023-04-01"
    },
    {
        name: "David Chang",
        location: "Boston",
        profilePicture: <FaPerson />,
        comment: "I'm impressed with the quick turnaround and the quality of work. A job well done!",
        date: "2023-04-05"
    },
    {
        name: "Isabella Brown",
        location: "Philadelphia",
        profilePicture: <FaPerson />,
        comment: "The team went above and beyond to ensure our satisfaction. Totally worth it!",
        date: "2023-04-10"
    },
    {
        name: "Ethan Johnson",
        location: "Dallas",
        profilePicture: <FaPerson />,
        comment: "Outstanding results! Our backyard has never looked better.",
        date: "2023-04-15"
    }
];



const AGFenceReviews = () => {
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
        <div className="bg-white text-black p-8 relative flex flex-col items-center">
            <div className="absolute top-0 right-0 p-4">
                <span className="text-sm bg-primary py-1 px-3 rounded-full">
                    {visibleCount === 1 ? `Review ${currentIndex + 1} of ${reviews.length}` : `Showing ${visibleCount} of ${reviews.length}`}
                </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">What Customers Say</h2>

            <div className={`w-full ${visibleCount > 1 ? 'flex flex-wrap gap-4 justify-center items-stretch' : 'flex flex-col items-center'}`}>
                {displayedReviews.map((review, index) => (
                    <div key={index} className="bg-primary p-6 rounded-lg shadow-lg text-center mb-4 w-full sm:w-1/5">
                        <div className="inline-block p-2 bg-orange-300 rounded-full mb-4">
                            {review.profilePicture}
                        </div>
                        <p className="mb-4">{review.comment}</p>
                        <p className="font-bold">{review.name}, {review.location}</p>
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
    );
};

export default AGFenceReviews;
