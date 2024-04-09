import connectMongoDB from '@/app/libs/mongodb'
import { NextResponse } from "next/server";
import Nav from '@/app/libs/models/nav';


export async function GET() {
  await connectMongoDB();
  // Fetch all header documents from the database
  const navs = await Nav.find();
  return NextResponse.json({ navs });
}
