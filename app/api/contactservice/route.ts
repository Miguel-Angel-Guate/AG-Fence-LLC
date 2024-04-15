import connectMongoDB from '@/app/libs/mongodb'
import { NextResponse } from "next/server";
import ContactSection from '@/app/libs/models/contactsection';
import mongoose from 'mongoose';
/* import mongoose from 'mongoose'; */


export async function GET() {
  await connectMongoDB();
  try {
    const contactsections = await ContactSection.find(); // Using the AgfenceData model
    console.log("🚀 ~  contactsections:", contactsections)
    console.log('collection',Object.keys(mongoose.connection.collections));
    /* console.log('Fetched data:', agfencedata); */
   return NextResponse.json({contactsections})
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
