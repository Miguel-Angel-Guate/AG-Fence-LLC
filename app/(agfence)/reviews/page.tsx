"use server"
import { revalidatePath } from "next/cache";
revalidatePath('/reviews');
import ReviewsData from "@/app/components/reviews/ReviewsContent";

import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}


const getReviewsData = async () => {
    "use server"
    try {
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}/api/reviewservice`, { cache: 'no-store' }/* { next: { tags: ['reviews'] } } */);
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
    const { reviewsections } = await getReviewsData()
    const { seo } = reviewsections[0];

    const url = new URL('/reviews', process.env.NEXT_PUBLIC_BASE_URL);

    return {
        title: seo?.title,
        description: seo?.description,
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


const AGFenceReviews = async () => {
    
    const { reviewsections } = await getReviewsData()
    const { reviews, legends } = reviewsections[0];
    
    return (

        <ReviewsData reviews={reviews} legends={legends} />

    );
};

export default AGFenceReviews;
