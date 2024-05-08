"use client"
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const SectionStatusLink = () => {
    const pathname = usePathname();
    const pathParts = pathname.split('/').filter(part => part);
    return (
        <>
            <div className="flex w-full">
                {pathParts.map((part, index) => (
                    <span key={`part-${part}-${index}`} className="flex w-auto ml-2 sm:ml-6 items-center justify-center nahum-gothic">
                        Home <RiArrowRightDoubleLine className="text-primary" size={30} />
                        {part}
                    </span>
                ))}
            </div>
            {pathname !== '/' && (
                <div className="inline-flex  items-center justify-center w-full sm:mb-4">
                    <hr className="w-full h-px  bg-gray-200 border-0 rounded dark:bg-gray-700" />
                    <div className="absolute -translate-x-1/2 bg-white left-1/2">
                    <svg width="auto" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10H10M14 16H18M14 10H18M6 16H10M10 20H14V7L12 4L10 7V20ZM2 20H6V7L4 4L2 7V20ZM18 20H22V7L20 4L18 7V20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                </div>
            </div>
            )}





        </>
    );
}

export default SectionStatusLink;