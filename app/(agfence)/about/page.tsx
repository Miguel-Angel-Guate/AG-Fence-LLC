import AGAboutEstimated from "@/app/components/aboutsection/AGAboutEstimated";
import AGFenceAboutExtraInformation from "@/app/components/aboutsection/AGAboutExtraInformation";
import AGFenceAboutInformation from "@/app/components/aboutsection/AGaboutInformation";
import AGFenceTrusBy from "@/app/components/shared/AGFenceTrusBy";

import { AboutHero } from "@/app/libs/types";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";


const getHero = async () => {
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

const AGFenceAbout = async () => {

    const { aboutsections } = await getHero();
    const { hero } = aboutsections[0];

    const images = [
        '/assets/about/hero/hero1.webp',
        '/assets/about/hero/hero2.webp',
        '/assets/about/hero/hero3.webp',
        '/assets/about/hero/hero4.webp',
        '/assets/about/hero/hero5.webp',
        '/assets/about/hero/hero6.webp'
    ];

    return (
        <>
            <div className="container mx-auto p-4">
                <section className="flex flex-col-reverse lg:flex-row text-center lg:text-left lg:items-center lg:justify-between">
                    <div className="lg:w-1/2 space-y-4">
                        <p className="text-primary">{hero.subtitle}</p>
                        <h1 className="text-2xl font-bold">{hero.title}</h1>
                        <p>{hero.description}</p>
                        <ul>
                            {hero.commitments.map((commitment: AboutHero, index: number) => (
                                <li key={index} className="flex items-center justify-center lg:justify-start">
                                    <FaRegCheckCircle className="text-primary mr-2" />
                                    <span>{String(commitment)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-wrap justify-center mt-6 lg:mt-0 lg:w-1/2">
                        {images.map((src, index) => (
                            <div key={`image-${src}`} className={`p-1 w-1/3 lg:w-auto ${index !== images.length - 1 ? 'mb-1 lg:mb-0' : ''}`}>
                                <Image
                                    src={src}
                                    alt={`Fence image ${index}`}
                                    width={127}
                                    height={127}
                                    className="rounded-full"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <AGFenceAboutInformation />
            <AGAboutEstimated />
            <AGFenceAboutExtraInformation />
            <AGFenceTrusBy sectionTitle="Our Classifieds" />

        </>
    );
}

export default AGFenceAbout;