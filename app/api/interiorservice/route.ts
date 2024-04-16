import connectMongoDB from '@/app/libs/mongodb'
import { NextResponse } from "next/server";
import Interiorsection from '@/app/libs/models/interiormodel';



export async function GET() {
  await connectMongoDB();
  try {
    const interiorsections = await Interiorsection.find();
    /* console.log('collection',Object.keys(mongoose.connection.collections)); */
   
   return NextResponse.json({interiorsections})
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
