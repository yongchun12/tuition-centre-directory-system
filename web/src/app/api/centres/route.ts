import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { TuitionCentre } from "@/models/TuitionCentre";

export async function GET(request: Request) {
  try {
    await dbConnect();

    // Basic search/filter functionality
    const { searchParams } = new URL(request.url);
    const subject = searchParams.get("subject");
    const location = searchParams.get("location");
    
    let query: any = { status: "approved" };

    if (subject) {
      query.subjects = { $regex: new RegExp(subject, "i") };
    }
    
    if (location) {
      query.$or = [
        { city: { $regex: new RegExp(location, "i") } },
        { state: { $regex: new RegExp(location, "i") } }
      ];
    }

    const centres = await TuitionCentre.find(query).populate("ownerId", "name").sort({ averageRating: -1 });

    return NextResponse.json({ success: true, data: centres });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const newCentre = await TuitionCentre.create({
      ...body,
      status: "pending", // Always pending until admin approval
    });

    return NextResponse.json({ success: true, data: newCentre }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
