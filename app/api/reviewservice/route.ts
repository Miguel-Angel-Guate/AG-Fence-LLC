import connectMongoDB from '@/app/libs/mongodb'
import { NextRequest, NextResponse } from "next/server";
import Reviewssections from '@/app/libs/models/reviewsmodel';
import { submitReview } from '@/app/actions/reviewActions';
import { revalidatePath } from 'next/cache';
/* import { revalidatePath } from 'next/cache'; */
/* import mongoose from 'mongoose'; */


export async function GET() {
    await connectMongoDB();
    try {
        const reviewsections = await Reviewssections.find(); // Using the AgfenceData model
        /* console.log('collection',Object.keys(mongoose.connection.collections)); */
        /* console.log('Fetched data:', agfencedata); */
      /*   revalidatePath('api/reviewservice'); */
      revalidatePath('/reviews');
        return NextResponse.json({ reviewsections })
    } catch (error) {
        console.error('Error fetching data:', error);
        // If there's an error, send a JSON response with a 500 status code
        return new NextResponse(JSON.stringify({ error: 'An error occurred while fetching data' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}


export async function POST(request: NextRequest) {
    await connectMongoDB(); // Ensure the DB connection is ready

    const data = await request.json(); // Get data from the request body

    try {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        const reviews = await submitReview(formData);

        return NextResponse.json({ message: 'Review added successfully', reviews });
    } catch (error) {
        console.error('Error adding review:', error);
        return NextResponse.json({ error: 'Failed to add review' }, { status: 500 });
    }
}