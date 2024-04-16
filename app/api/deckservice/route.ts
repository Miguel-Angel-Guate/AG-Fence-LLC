import connectMongoDB from '@/app/libs/mongodb'
import { NextResponse } from "next/server";
import Decksection from '@/app/libs/models/deckmodel';



export async function GET() {
  await connectMongoDB();
  try {
    const decksections = await Decksection.find();
    /* console.log('collection',Object.keys(mongoose.connection.collections)); */
   
   return NextResponse.json({decksections})
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
