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
                <div className="inline-flex items-center justify-center w-full sm:mb-4">
                <hr className="w-full h-px  bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2">
                    <svg className="w-4 h-4 text-primary " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
            )}




        </>
    );
}

export default SectionStatusLink;