"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import { CarouselProps } from '@/app/libs/types';


const Carousel = ({ items }: CarouselProps ) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prevCurrent) => (prevCurrent + 1) % items?.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [items?.length]);

    const getImagePath = (index: number) => {
        return index === 0 ? '/assets/advantageIcons/advantage.svg' : `/assets/advantageIcons/advantage${index}.svg`;
    };

    return (
        <>
            {/* Mobile view: Carousel */}
            <div className="sm:hidden flex justify-center  flex-col items-center w-full overflow-hidden h-[30vh] bg-[#F3F4F4]">
                <div className="flex h-[25vh] w-[80%]">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex-none w-full snap-center flex justify-center items-center transition-opacity duration-500 ${index === current ? 'visible' : 'hidden'}`}
                        >
                            <div className="flex flex-col justify-center items-center space-y-4 h-full p-4">
                                <Image
                                    src={getImagePath(index)}
                                    alt={`Icon ${index}`}
                                    width={48} // Set your desired size
                                    height={48}
                                    priority
                                />
                                <div className="text-sm font-semibold text-black-500">{`0${index + 1}`}</div>
                                <div className="text-lg font-semibold text-primary">{item}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination dots */}
                <div className="flex space-x-1 justify-center w-full py-2">
                    {items.map((_, dotIndex) => (
                        <span
                            key={dotIndex}
                            className={`inline-block h-2 w-2 rounded-full ${current === dotIndex ? 'bg-green-500' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop view: Side by side */}
            <div className='sm:flex sm:w-full sm:justify-center sm:h-[35vh]'>
            <div className="hidden sm:flex sm:w-[70%] sm:justify-center bg-[#F3F4F4]">
                {items.map((item: any, index: any) => (
                    <div key={index} className="flex-none w-1/3">
                        <div className="flex flex-col justify-center items-center space-y-4 h-full p-4">
                            <Image
                                src={getImagePath(index)} // Dynamically generate the path to your icon
                                alt={`Advantage ${index}`}
                                className="h-12 w-12 mb-2"
                                width={40}
                                height={40}
                                priority
                            />
                            <div className="text-sm font-semibold text-gray-500">{`0${index + 1}`}</div>
                            <div className="text-lg font-semibold text-gray-800">{item}</div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            
        </>
    );
};

export default Carousel;
