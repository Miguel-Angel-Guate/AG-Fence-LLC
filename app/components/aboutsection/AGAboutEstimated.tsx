import Image from "next/image";
import Progress from "../shared/ProgressBar";
import { AboutSections } from "@/app/libs/types";


const getEstimated = async () => {
    try {
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}/api/aboutservice`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error loading aboutservice:", error);
        return []
    }
};


const AGAboutEstimated = async () => {
    const { aboutsections }: { aboutsections: AboutSections[] } = await getEstimated();
    const { estimadetsection } = aboutsections[0] || {};

    const images = [
        '/assets/about/estimate/inf1.webp',
        '/assets/about/estimate/inf2.webp',
        '/assets/about/estimate/inf3.webp'
    ];
    return (
        <div className="flex w-full flex-col sm:flex-row items-center bg-white px-8 py-6">
            {/* Left Side: Text Section + Progress Bars */}
            <div className="sm:w-1/2 w-full ">
                <div className=" flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-gray-800">{estimadetsection.subtitle}</h2>
                    <p className="text-xl text-gray-600 mt-2 mb-4">{estimadetsection.title}</p>
                    <a href={estimadetsection.href} className="bg-green-500 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >
                        {estimadetsection.gettingtouch}
                    </a>
                </div>
                {/* Progress Bars */}
                {Object.entries(estimadetsection.barguarantee).map(([key, bar]: [string, { title: string, value: number }]) => {
                    return (
                        key !== '_id' && (
                            <div key={key} className="mb-4 sm:w-[80%] flex flex-wrap">
                                <div className="flex w-full justify-between">
                                    <h3 className="text-gray-700 font-semibold">{bar.title}</h3>
                                    <p>{bar.value.toString()}</p>
                                </div>
                                <Progress percentage={parseInt(bar.value.toString())} colorClass="bg-primary" />
                            </div>
                        )
                    )
                })}
            </div>

            {/* Right Side: Image Section */}
            <div className="flex flex-wrap w-full justify-center items-center sm:w-1/2 mb-6 lg:mb-0">
                {images.map((imgPath, index) => (
                    <div key={imgPath} className={`p-2 ${index % 2 === 0 ? 'w-1/3' : 'w-2/5'} ${index === 0 ? 'lg:mr-4' : ''}`}>
                        <Image
                            src={imgPath}
                            alt={`AG Fencing Image ${index}`}
                            width={index % 2 === 0 ? 200 : 400} // Smaller width for the first and third images
                            height={index % 2 === 0 ? 300 : 600} // Adjust height proportionally
                            className={`rounded-lg ${index === 1 ? 'rounded-tr-3xl' : ''} ${index === 3 ? 'rounded-bl-3xl' : ''}`}
                            priority
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AGAboutEstimated;