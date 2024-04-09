import connectMongoDB from '@/app/libs/mongodb'
import { NextResponse } from "next/server";
import AgfenceData from '@/app/libs/models/agfencedata';


export async function GET() {
  await connectMongoDB();
  try {
    const agfencedata = await AgfenceData.find(); // Using the AgfenceData model
    /* console.log('Fetched data:', agfencedata); */
   return NextResponse.json({agfencedata})
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
