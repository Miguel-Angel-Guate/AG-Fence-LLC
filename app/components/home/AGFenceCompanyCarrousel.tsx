"use client"
import React, { useState } from 'react';
import { CompanyInfo } from "@/app/libs/types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const MobileCarousel = ({ companyInfo }: { companyInfo: CompanyInfo }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const infoItems = [companyInfo.workHours, companyInfo.location, companyInfo.serviceArea, companyInfo.estimates];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : infoItems.length - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < infoItems.length - 1 ? prevIndex + 1 : 0
        );
    };

    const renderInfoItem = (item: any) => (
        <div className="flex flex-wrap w-4/5 justify-center items-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 flex justify-center text-justify w-[95%] mb-4">{item.description}</p>
            <button className="bg-primary flex items-center justify-center w-40 h-11 text-white rounded hover:bg-indigo-800">
            {item.detailcontact}
            </button>
        </div>
    );

    return (
        <div className="bg-gray-100 divide-lime-300 mb-10">
            <div className="text-center mb-4">
                <h2 className="text-base font-bold text-primary">Our Company</h2>
                <p className="text-3xl text-black">{companyInfo.title}</p>
            </div>

            <div className="flex w-full flex-wrap  justify-around items-center">
                <button
                    className="focus:outline-none"
                    onClick={handlePrev}
                    aria-label="Previous slide"
                >
                    
                    <FaArrowLeft className='text-primary' />

                </button>

                {renderInfoItem(infoItems[currentIndex])}

                <button
                    className="focus:outline-none"
                    onClick={handleNext}
                    aria-label="Next slide"
                >
                    <FaArrowRight className='text-primary' />
                </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center  mt-4">
                {infoItems.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full mx-1 ${currentIndex === index ? 'bg-primary' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileCarousel;
