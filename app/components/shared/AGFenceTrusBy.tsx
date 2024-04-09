import Image from 'next/image';


const AGTrustBy = ({ sectionTitle }: { sectionTitle: string }) => {
    const images = [
        { src: "/assets/trustby/trustby1.webp", alt: "Company 1" },
        { src: "/assets/trustby/trustby2.webp", alt: "Company 2" },
        { src: "/assets/trustby/trustby3.webp", alt: "Company 3" },
    ];

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-xl font-bold text-primary text-center mb-8">
                    {sectionTitle}
                </h2>
                <div className="flex justify-between items-center mx-auto" style={{ maxWidth: '80%' }}>
                    {images.map((image) => (
                        <div key={image.alt} className="flex">
                            <div className="shadow-lg rounded-lg flex justify-center transform transition duration-300 hover:scale-105">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={236}
                                    height={88}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AGTrustBy
