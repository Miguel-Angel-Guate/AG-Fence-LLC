import AGFenceAboutExtraInformation from "@/app/components/aboutsection/AGAboutExtraInformation";
import AGTitleServices from "@/app/components/shared/AGTitleServices";
import {  FaPhone } from "react-icons/fa6";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

import { Metadata, ResolvingMetadata } from 'next'
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const getDeckData = async () => {
    try {
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}/api/deckservice`);
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

    const { decksections } = await getDeckData()
    const { seo } = decksections[0];

    const url = new URL('/service/deck', process.env.NEXT_PUBLIC_BASE_URL);

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo?.keywords,
        alternates: {
            canonical: url.toString(),
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }

}



const AGDeckService = async () => {

    const { decksections } = await getDeckData();
    const { deckhome, freeEstimate } = decksections[0];

    return (
        <>
            <AGTitleServices title="AG Deck Services" />

            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start py-8">
                <div className="lg:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-4">Deck</h2>
                    {deckhome.map((detail: any) => (
                        <div key={detail.id} className={`flex ${detail.id === 'description' ? 'flex-col' : 'items-center'} mb-4`}>
                            {detail.id !== 'description' && (
                                <div className="flex-shrink-0">
                                    <FaRegCheckCircle className="text-green-500 mr-2" />
                                </div>
                            )}
                            {detail.href ? (
                                <a href={detail.href} className={`ml-2 hover:underline`} target="_blank" rel="noopener noreferrer">
                                    {detail.content}
                                </a>
                            ) : (
                                <p className={`${detail.id === 'description' ? '' : 'ml-2'}`}>{detail.content}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/2 p-4">
                    <Image
                        src="/assets/deck/deck.webp"
                        alt="Fencing"
                        width={640} // Adjust the size as necessary
                        height={360} // Adjust the size as necessary
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                {freeEstimate?.length > 0 && freeEstimate.map((option: any) => (
                    <div key={option.id} className={`bg-green-600 text-white text-center p-4 rounded-md hover:bg-green-600 cursor-pointer w-auto mb-4`}>
                        <a href={option.href} className="flex justify-center items-center space-x-2 hover:underline">
                            <FaPhone className="text-white" />
                            <span>{option.text}</span>
                        </a>
                    </div>
                ))}
            </div>
            <AGFenceAboutExtraInformation />
        </>
    );
}

export default AGDeckService;