"use client"
import { RecentProjects } from "@/app/libs/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AGRecentCarrousel = ({ recentProjects }: { recentProjects: RecentProjects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prev => prev > 0 ? prev - 1 : recentProjects.projects.length - 1);
    };

    const handleNext = () => {
        setCurrentIndex(prev => prev < recentProjects.projects.length - 1 ? prev + 1 : 0);
    };
    const imagePath = (index: number) => `/assets/recenproject/recent${index + 1}.webp`;

    return (

        <div className="bg-gray-100 p-4">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-primary">{recentProjects.title}</h2>
                <p className="text-xl text-black">{recentProjects.subtitle}</p>
            </div>

            <div className="flex items-center justify-center">
                <FaArrowLeft className=" text-primary cursor-pointer" size={24} onClick={handlePrev} />
                <div className="w-full flex flex-wrap justify-center">
                    {recentProjects.projects.map((project, index) => {
                        return (
                            <div key={project._id} className={`w-full p-4 ${currentIndex === index ? 'block' : 'hidden'}`}>
                                <Image
                                    src={imagePath(index)}
                                    alt={project.imageAlt}
                                    width={375}
                                    height={491}
                                    className="rounded-lg shadow-lg"
                                />
                                <div className=" bg-black bg-opacity-40 flex w-full  flex-wrap justify-center transition-opacity duration-300">
                                    {/* <h3 className="text-white flex w-full text-lg justify-center font-semibold">{project.title}</h3> */}
                                    <Link href={project.link} passHref className="bg-green-500 text-white flex w-full justify-center   rounded hover:bg-green-700 transition-colors ">
                                        Visit
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <FaArrowRight className=" text-primary cursor-pointer" size={24} onClick={handleNext} />
            </div>

            <div className="flex justify-center space-x-2 mt-4">
                {recentProjects.projects.map((_, index) => (
                    <button
                        key={_._id}
                        className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to project ${index}`}
                    />
                ))}
            </div>

            <div className="text-center mt-4">
                <button className="text-green-600 hover:text-green-800 transition-colors">
                    {recentProjects.seeMoreLink}
                </button>
            </div>
        </div>
    );
}

export default AGRecentCarrousel;