import AGAboutEstimated from "@/app/components/aboutsection/AGAboutEstimated";
import AGFenceAboutExtraInformation from "@/app/components/aboutsection/AGAboutExtraInformation";
import AGFenceAboutInformation from "@/app/components/aboutsection/AGaboutInformation";
import AGFenceTrusBy from "@/app/components/shared/AGFenceTrusBy";

import { AboutHero } from "@/app/libs/types";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}


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


export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
   

    const { aboutsections } = await getHero()
    const { seo } = aboutsections[0];
    /* console.log("🚀 ~ seo:", seo) */
    
    const metadataBase = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`)
    const url = new URL('/about', process.env.NEXT_PUBLIC_BASE_URL);

    return {
        title: seo?.title,
        description: seo?.description,
        keywords: seo?.keywords,
        alternates: {
            canonical: url.toString(),
        },
        robots: {
            index: true, // Allow search engines to index the page
            follow: true, // Instruct search engines to follow the links on the page
            nocache: false, // Allow caching of the page for efficiency (unless there's a specific reason to prevent caching)
            googleBot: {
                index: true, // Allow Google to index the page
                follow: true, // Allow Google to follow the links on the page
                noimageindex: false, // Allow images on the page to be indexed unless you have a reason to prevent it
                'max-video-preview': -1, // Use the default video preview size set by Google
                'max-image-preview': 'large', // Suggest to Google that large image previews can be used
                'max-snippet': -1, // Use the default snippet length set by Google
            },
        },
    }

}

const AGFenceAbout = async ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) => {

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