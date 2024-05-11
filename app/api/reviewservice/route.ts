import connectMongoDB from '@/app/libs/mongodb'
import { NextRequest, NextResponse } from "next/server";
import Reviewssections from '@/app/libs/models/reviewsmodel';
/* import { revalidatePath } from 'next/cache'; */
/* import mongoose from 'mongoose'; */


export async function GET() {
    await connectMongoDB();
    try {
        const reviewsections = await Reviewssections.find(); // Using the AgfenceData model
        /* console.log('collection',Object.keys(mongoose.connection.collections)); */
        /* console.log('Fetched data:', agfencedata); */
      /*   revalidatePath('api/reviewservice'); */
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

        const review = {
            name: data.name,
            location: data.location,
            comment: data.comment,
            date: new Date(data.date), // Assuming date is correctly formatted
            rating: data.rating
        };

        // Insert the review at the start of the array
        await Reviewssections.findByIdAndUpdate(
            process.env.ID_REVIEWS_UPDATE_SECTIONS,
            { $push: { reviews: { $each: [review], $position: 0 } } },
            { new: true }
        );

        // After adding, fetch the latest reviews
        const latestReviews = await Reviewssections.findOne({ _id: process.env.ID_REVIEWS_UPDATE_SECTIONS });
        console.log("🚀 ~ POST ~ latestReviews:", latestReviews)

        return NextResponse.json({ message: 'Review added successfully', latestReviews });
        
    } catch (error) {
        console.error('Error adding review:', error);
        return NextResponse.json({ error: 'Failed to add review' }, { status: 500 });
    }
}

