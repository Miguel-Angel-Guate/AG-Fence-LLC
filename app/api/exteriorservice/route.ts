import connectMongoDB from '@/app/libs/mongodb'
import { NextResponse } from "next/server";
import Exteriorsection from '@/app/libs/models/exteriormodel';

export async function GET() {
  await connectMongoDB();
  try {
    const exteriorsections = await Exteriorsection.find();
    /* console.log('collection',Object.keys(mongoose.connection.collections)); */
   
   return NextResponse.json({exteriorsections})
  } catch (error) {
    console.error('Error fetching data:', error);
    return new NextResponse(JSON.stringify({ error: 'An error occurred while fetching data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
