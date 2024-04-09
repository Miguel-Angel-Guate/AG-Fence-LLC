import connectMongoDB from '@/app/libs/mongodb'
import { NextResponse } from "next/server";
import Footerdata from '@/app/libs/models/footerdata';
/* import mongoose from 'mongoose'; */


export async function GET() {
  await connectMongoDB();
  //this line of code it was important to know the name mongo want i call my collection
  /* console.log('collection',Object.keys(mongoose.connection.collections)); */
  const footerdata = await Footerdata.find();
  
  return NextResponse.json({ footerdata });
}
