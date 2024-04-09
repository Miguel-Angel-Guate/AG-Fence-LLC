import connectMongoDB from '@/app/libs/mongodb'
import { NextResponse } from "next/server";
import Aboutsection from '@/app/libs/models/aboutmodel';
import mongoose from 'mongoose';
/* import mongoose from 'mongoose'; */


export async function GET() {
  await connectMongoDB();
  try {
    const aboutsections = await Aboutsection.find(); // Using the AgfenceData model
    /* console.log('collection',Object.keys(mongoose.connection.collections)); */
    /* console.log('Fetched data:', agfencedata); */
   return NextResponse.json({aboutsections})
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
