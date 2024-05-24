'use server';
import { revalidatePath } from 'next/cache';

import connectMongoDB from '@/app/libs/mongodb';
import ReviewSections from '@/app/libs/models/reviewsmodel';

export const submitReview = async (formData: FormData) => {
    await connectMongoDB();

    const review = {
        name: formData.get('name') as string,
        location: formData.get('location') as string,
        comment: formData.get('comment') as string,
        date: new Date().toISOString(),
        rating: parseInt(formData.get('rating') as string)
    };

    try {
        // Insert the review at the start of the array
        await ReviewSections.findByIdAndUpdate(
            process.env.ID_REVIEWS_UPDATE_SECTIONS,
            { $push: { reviews: { $each: [review], $position: 0 } } },
            { new: true }
        );

        const reviewSection = await ReviewSections.findOne({ _id: process.env.ID_REVIEWS_UPDATE_SECTIONS });
        revalidatePath('/reviews'); // Ensure this path is revalidated
        return reviewSection.reviews;
    } catch (error) {
        console.error('Error submitting review:', error);
        throw new Error('Error submitting review');
    }
};