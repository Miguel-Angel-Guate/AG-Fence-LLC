import AGFenceAboutExtraInformation from "@/app/components/aboutsection/AGAboutExtraInformation";
import AGTitleServices from "@/app/components/shared/AGTitleServices";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Metadata, ResolvingMetadata } from 'next'
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const getExteriorData = async () => {
    try {
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}/api/exteriorservice`);
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

    const { exteriorsections } = await getExteriorData()
    const { seo } = exteriorsections[0];



    const url = new URL('/services/exterior-remodeling', process.env.NEXT_PUBLIC_BASE_URL);

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

const AGRemodelationExterior = async () => {
    const { exteriorsections } = await getExteriorData();
    const { exteriorhome, freeEstimate, exteriorSection } = exteriorsections[0];
    return (
        <>
            <AGTitleServices title="AG Remodelation Exterior Services" />
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start py-8">
                <div className="lg:w-1/2 w-[80%]">
                    <h2 className="sm:text-xl text-base font-bold mt-6 mb-2">{exteriorSection.title}</h2>
                    {exteriorSection.description.map((desc: any, index: any) => (
                        <p key={index} className="my-4">{desc}</p>
                    ))}
                    {exteriorhome.map((detail: any) => (
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
                        src="/assets/exterior/exterior.webp"
                        alt="Fencing"
                        width={640}
                        height={360}
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                {freeEstimate.map((option: any) => (
                    <div key={option.id} className={`bg-green-600 sm:w-44 text-white text-center p-4 rounded-md hover:bg-green-600 cursor-pointer  mb-4`}>
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

export default AGRemodelationExterior;