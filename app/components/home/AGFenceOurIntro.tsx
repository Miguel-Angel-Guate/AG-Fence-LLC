import Image from 'next/image';

const getAGFenceHome = async () => {

    try {
        const apiUrl = process.env.API_URL;
        const res = await fetch(`${apiUrl}/api/agfencehome`);
        if (!res.ok) {
            throw new Error("Failed to fetch fencing");
        }

        return await res.json()

    } catch (error) {
        console.log("Error loading fencing: ", error);
    }
};

const AGFenceOurIntro = async () => {
    const { agfencedata } = await getAGFenceHome()
    const { intro } = agfencedata[0].home;

    // Image paths
    const images = [
        '/assets/oursection/img/frame.webp',
        '/assets/oursection/img/frame1.webp',
        '/assets/oursection/img/frame2.webp',
        '/assets/oursection/img/frame3.webp'
    ];
    return (
        <div className="flex flex-col lg:flex-row items-start lg:items-center bg-white px-4 py-8">
            <div className="flex flex-wrap justify-center items-center lg:w-1/2 mb-6 lg:mb-0">
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
            <div className=" sm:w-1/2 sm:pl-10">
                <div className="text-lg text-primary mb-4">{intro.subtitle}</div>
                <div className="text-3xl font-bold text-gray-900 mb-3">{intro.title}</div>
                <p className="text-gray-700 mb-4">{intro.description}</p>
                <p className="text-gray-700 mb-5">{intro.secondDescription}</p>
                <ul className="flex flex-wrap justify-start sm:items-center">
                    {intro.commitments.map((commitment:string) => (
                        <li key={commitment} className="flex items-center mr-4 mb-4"> {/* Using commitment as key */}
                            <Image
                                src="/assets/oursection/icon/checkicon.svg"
                                alt="Check Icon"
                                width={24}
                                height={24}
                                className="text-green-500"
                                priority
                            />
                            <span className="ml-2 text-gray-700">{commitment}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AGFenceOurIntro;