
import ReviewsData from "@/app/components/reviews/ReviewsContent";

import { Metadata, ResolvingMetadata } from 'next'

/* type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}


const getReviewsData = async () => {
    try {
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}/api/reviewservice`);
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

} */



const AGFenceReviews = async () => {
    /*  const { reviewsections } = await getReviewsData()
     const { reviews, legends } = reviewsections[0]; */

    return (
        <>
            <h1>hello reviews</h1>
            {/*  <ReviewsData reviews={reviews} legends={legends} /> */}
        </>
    );
};

export default AGFenceReviews;
